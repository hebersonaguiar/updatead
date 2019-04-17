FROM python:3.4.9

ENV TZ=America/Sao_Paulo

RUN apt-get update -y ; \
	    apt-get install -y python-dev libldap2-dev libsasl2-dev libssl-dev rabbitmq-server apt-utils tzdata ntp ntpdate

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone 

RUN dpkg-reconfigure -f noninteractive tzdata 

WORKDIR /opt

ADD requirements.txt /opt

COPY docker-entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN pip install -r requirements.txt

ADD static /opt/static
ADD templates /opt/templates
ADD app.py /opt/

EXPOSE 5000

ENTRYPOINT ["/entrypoint.sh"]

CMD celery -A app.celery worker --loglevel=info