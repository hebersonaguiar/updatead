import os, sys, ast, re, json, random, requests, datetime
from flask import Flask, session, render_template, request, redirect, url_for, g
from flask_restful import Resource, Api
from flask_cors import CORS
from flask_mysqldb import MySQL
from json import dumps
from flask_jsonpify import jsonify
from ldap3 import *
from ldap3.core.exceptions import LDAPCursorError
from celery import Celery

app = Flask(__name__)
api = Api(app)
CORS(app, resources={r"/*": {"origins": "*"}})
app.secret_key = "flash message"

def make_celery(app):
    celery = Celery(app.import_name, backend=app.config['CELERY_BACKEND'],
                    broker=app.config['CELERY_BROKER_URL'])
    celery.conf.update(app.config)
    TaskBase = celery.Task
    class ContextTask(TaskBase):
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)
    celery.Task = ContextTask
    return celery


app.config['MYSQL_HOST'] = 'mysqlhost'
app.config['MYSQL_USER'] = 'mysqluser'
app.config['MYSQL_PASSWORD'] = 'mysqlpass'
app.config['MYSQL_DB'] = 'dbmysql'
app.config['CELERY_BROKER_URL'] = 'amqp://guest:guest@localhost:5672//'
app.config['CELERY_BACKEND'] = 'db+mysql://mysqluser:mysqlpass@mysqlhost/dbmysql'
app.config['CELERY_ACCEPT_CONTENT'] = ['json']
app.config['CELERY_TASK_SERIALIZER' ]= 'json'
app.config['CELERY_RESULT_SERIALIZER'] = 'json'

celery = make_celery(app)

mysql = MySQL(app)

# CONEXÃO COM O AD
def conn():
    server_name = 'adserver'
    user_name   = 'CN=usersvc,OU=Usuarios,OU=CGTI,OU=MME,DC=mme,DC=gov,DC=br'  
    password    = 'passsvc'
    server      = Server(server_name, get_info=ALL)
    conn        = Connection(server, user=user_name, password=password)
    c           = conn.bind()
    return conn

def getOffice():
	cur = mysql.connection.cursor()
	cur.execute("SELECT office FROM form_office")
	office = cur.fetchall()
	cur.close()

	return office

def getStructure():
	cur = mysql.connection.cursor()
	cur.execute("SELECT organization_unit, initials FROM form_structure")
	structure = cur.fetchall()
	cur.close()

	return structure

def getCompany():
	cur = mysql.connection.cursor()
	cur.execute("SELECT company FROM form_company")
	company = cur.fetchall()
	cur.close()

	return company


# REGRAS DE AUTENTICAÇÃO PARA PÁGINA DE LOGIN
@app.route('/', methods=['GET','POST'])
def index():

	if request.method == 'POST':
		session.pop('user', None)

		usernameForm = request.form['username'] 
		domain_name = 'mme.gov.br'
		domain      = domain_name.split('.')
		connect     = conn()

		try:
			connect.search('dc={},dc={},dc={}'.format(domain[0], domain[1], domain[2]), '(sAMAccountName={})'.format(usernameForm), attributes = [ 'distinguishedName' ], search_scope=SUBTREE )
			obj  = connect.entries[0].distinguishedName.value
			distinguishedName = str(obj)

			passwordForm = request.form['password']
			serverAd = 'adserver'
			userNameConn = distinguishedName
			passwordAdConn = passwordForm
			serverAdConn      = Server(serverAd, get_info=ALL)
			connAd        = Connection(serverAdConn, user=userNameConn, password=passwordAdConn)
			cAd =  connAd.bind()

			if cAd == True:
				session['user'] = request.form['username']
				return redirect(url_for('updatead'))
			else:
				return redirect(url_for('index'))

			return jsonify({'Conn': cAd}), 200

		except Exception as error_message:
			return redirect(url_for('index'))

	return render_template('index.html')
	
# BUSCA DADOS PARA INSERÇÃO EM CAPOS NA PÁGINA DE ATUALIZAÇÃO
@app.route('/updatead')
def updatead():
	if g.user:	

		try:
			username = g.user

			domain_name = 'mme.gov.br'
			domain      = domain_name.split('.')
			connect     = conn()

			connect.search('dc={},dc={},dc={}'.format(domain[0], domain[1], domain[2]), '(sAMAccountName={})'.format(username), attributes = [ 'sAMAccountName', 'distinguishedName', 'displayName'], search_scope=SUBTREE )

			sAMAccountNameObj  = connect.entries[0].sAMAccountName.value
			sAMAccountName = str(sAMAccountNameObj)

			# distinguishedNameObj  = connect.entries[0].distinguishedName.value
			# distinguishedName = str(distinguishedNameObj)

			displayNameObj  = connect.entries[0].displayName.value
			displayName = str(displayNameObj)

			office = getOffice()
			structure = getStructure()
			company = getCompany()

			return render_template('updatead.html', data=[{'namead': sAMAccountName}], dataname=[{'displayName': displayName}], form_office=office, form_structure=structure, form_company=company)
		except Exception as error_message:
			return redirect(url_for('index'))
			# return error_message

	return redirect(url_for('index'))


@app.route('/modifyuser', methods=['GET','POST'])
def modifyuser():

	if g.user:
		now = datetime.datetime.now()
		username = g.user

		ramal = request.form.get('ramal')
		andar  = request.form.get('andar')
		sala  = request.form.get('sala')
		cargo = request.form.get('cargo')
		vinculo = request.form.get('vinculo')
		departamento = request.form.get('departamento')
		created_at = now.strftime("%Y-%m-%d %H:%M")


	modifyuserTask.delay(username, ramal, andar, sala, cargo, vinculo, departamento, created_at)

	return redirect(url_for('updatead'))	


# ATUALIZA USUARIO
@celery.task(name='app.modifyuserTask')
def modifyuserTask(username, ramal, andar, sala, cargo, vinculo, departamento, created_at):
	# if g.user:
	# 	now = datetime.datetime.now()
	# 	username = g.user

	domain_name = 'mme.gov.br'
	domain      = domain_name.split('.')
	connect     = conn()
	try:
		connect.search('dc={},dc={},dc={}'.format(domain[0], domain[1], domain[2]), '(sAMAccountName={})'.format(username), attributes = [ 'distinguishedName' ], search_scope=SUBTREE )
		distinguishedNameObj  = connect.entries[0].distinguishedName.value
		distinguishedName = str(distinguishedNameObj)
		# ramal = request.form.get('ramal')
		# andar  = request.form.get('andar')
		# sala  = request.form.get('sala')
		# cargo = request.form.get('cargo')
		# vinculo = request.form.get('vinculo')
		# departamento = request.form.get('departamento')
		# created_at = now.strftime("%Y-%m-%d %H:%M")
		updated = 'True'
		local = andar + " Sala " + sala

		connect.modify(distinguishedName, {'title':  [(MODIFY_REPLACE, [str(cargo)])],
			'physicalDeliveryOfficeName':  [(MODIFY_REPLACE, [str(local)])],
			'telephoneNumber':  [(MODIFY_REPLACE, [str(ramal)])],
			'company':  [(MODIFY_REPLACE, [str(vinculo)])],
			'department':  [(MODIFY_REPLACE, [str(departamento)])],
			'extensionAttribute15':  [(MODIFY_REPLACE, [str(updated)])]
			})

		r = requests.post('http://apidb/insert',
              data=json.dumps({'login': username,
              	'vinculo': vinculo,
              	'cargo': cargo,
              	'sala': local,
              	'departamento': departamento,
              	'ramal': ramal,
              	'created_at': created_at}),
              headers={'Content-Type': 'application/json'})

		return 'Usuario Inserido no AD'
	except Exception as error_message:
		return 'Error'
		#return jsonify(error_message), 400

# REGRA PARA PÁGINA DE LOGOUT
@app.route("/logout", methods=['GET','POST'])
def logout():
	if 'user' in session:
		g.user = None
		try:
			dropsession()
			return redirect(url_for('index'))			
		except Exception as e:
			return redirect(url_for('index'))

	return 'Not logged in'

@app.before_request
def before_request():
	g.user = None
	if 'user' in session:
		g.user = session['user']

@app.route('/getsession')
def getsession():
	if 'user' in session:
		return session['user']

	return 'Not logged in'

@app.route('/dropsession')
def dropsession():
	session.pop('user', None)
	return 'Dropped!'


if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0', port="5000")