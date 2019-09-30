// ENABLE / DISABLE INPUT CARGO --> DEPARTAMENTO    
document.getElementById("cargo").addEventListener("change", function() {
var namecargo = document.getElementById('cargo').value;
if (namecargo != "") {
        document.getElementById('departamento').removeAttribute("disabled");
    } else {
        document.getElementById('departamento').setAttribute("disabled", null);
    }
});

// ENABLE / DISABLE INPUT CARGO --> DEPARTAMENTO    
document.getElementById("company").addEventListener("change", function() {
var namecompany = document.getElementById('company').value;
if (namecompany != "") {
        document.getElementById('departamento').removeAttribute("disabled");
    } else {
        document.getElementById('departamento').setAttribute("disabled", null);
    }
});

// ENABLE / DISABLE INPUT DEPARTAMENTO --> SALA        
document.getElementById("departamento").addEventListener("change", function() {
var namedepartamento = document.getElementById('departamento').value;
if (namedepartamento != "") {
        document.getElementById('andar').removeAttribute("disabled");
    } else {
        document.getElementById('andar').setAttribute("disabled", null);
    }
});

// ENABLE / DISABLE INPUT SALA --> RAMAL        
document.getElementById("andar").addEventListener("change", function() {
var nameandar = document.getElementById('andar').value;
if (nameandar != "") {
        document.getElementById('sala').removeAttribute("disabled");
    } else {
        document.getElementById('sala').setAttribute("disabled", null);
    }
});

// ENABLE / DISABLE INPUT SALA --> RAMAL        
document.getElementById("sala").addEventListener("change", function() {
var namesala = document.getElementById('sala').value;
if (namesala != "") {
        document.getElementById('ramal').removeAttribute("disabled");
    } else {
        document.getElementById('ramal').setAttribute("disabled", null);
    }
});

// ENABLE / DISABLE INPUT-BUTTON RAMAL --> ENVIAR
document.getElementById("ramal").addEventListener("keyup", function() {
var nameramal = document.getElementById('ramal').value;
if (nameramal != "") {
        document.getElementById('send').removeAttribute("disabled");
    } else {
        document.getElementById('send').setAttribute("disabled", null);
    }
});



$(document).ready(function () {
    $("#andar").change(function () {
        var val = $(this).val();
        if (val == "Subsolo") {
            $("#sala").html("<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option><option value='32'>32</option><option value='33'>33</option><option value='34'>34</option><option value='35'>35</option><option value='36'>36</option><option value='37'>37</option><option value='38'>38</option><option value='39'>39</option><option value='40'>40</option><option value='41'>41</option><option value='42'>42</option><option value='43'>43</option><option value='44'>44</option><option value='45'>45</option><option value='46'>46</option><option value='47'>47</option><option value='48'>48</option><option value='49'>49</option><option value='50'>50</option><option value='51'>51</option><option value='52'>52</option><option value='53'>53</option><option value='54'>54</option><option value='55'>55</option><option value='56'>56</option><option value='57'>57</option><option value='58'>58</option><option value='59'>59</option>");
        } else if (val == "2º Subsolo") {
            $("#sala").html("<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option><option value='32'>32</option><option value='33'>33</option><option value='34'>34</option><option value='35'>35</option><option value='36'>36</option><option value='37'>37</option><option value='38'>38</option><option value='39'>39</option><option value='40'>40</option><option value='41'>41</option><option value='42'>42</option><option value='43'>43</option><option value='44'>44</option><option value='45'>45</option><option value='46'>46</option><option value='47'>47</option><option value='48'>48</option><option value='49'>49</option><option value='50'>50</option><option value='51'>51</option><option value='52'>52</option><option value='53'>53</option><option value='54'>54</option><option value='55'>55</option><option value='56'>56</option><option value='57'>57</option><option value='58'>58</option><option value='59'>59</option>");
        } else if (val == "Terreo") {
            $("#sala").html("<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option><option value='32'>32</option><option value='33'>33</option><option value='34'>34</option><option value='35'>35</option><option value='36'>36</option><option value='37'>37</option><option value='38'>38</option><option value='39'>39</option><option value='40'>40</option><option value='41'>41</option><option value='42'>42</option><option value='43'>43</option><option value='44'>44</option><option value='45'>45</option><option value='46'>46</option><option value='47'>47</option><option value='48'>48</option><option value='49'>49</option><option value='50'>50</option><option value='51'>51</option><option value='52'>52</option><option value='53'>53</option><option value='54'>54</option><option value='55'>55</option><option value='56'>56</option><option value='57'>57</option><option value='58'>58</option><option value='59'>59</option>");
        } else if (val == "1º Andar") {
            $("#sala").html("<option value='101'>101</option><option value='102'>102</option><option value='103'>103</option><option value='104'>104</option><option value='105'>105</option><option value='106'>106</option><option value='107'>107</option><option value='108'>108</option><option value='109'>109</option><option value='110'>110</option><option value='111'>111</option><option value='112'>112</option><option value='113'>113</option><option value='114'>114</option><option value='115'>115</option><option value='116'>116</option><option value='117'>117</option><option value='118'>118</option><option value='119'>119</option><option value='120'>120</option><option value='121'>121</option><option value='122'>122</option><option value='123'>123</option><option value='124'>124</option><option value='125'>125</option><option value='126'>126</option><option value='127'>127</option><option value='128'>128</option><option value='129'>129</option><option value='130'>130</option><option value='131'>131</option><option value='132'>132</option><option value='133'>133</option><option value='134'>134</option><option value='135'>135</option><option value='136'>136</option><option value='137'>137</option><option value='138'>138</option><option value='139'>139</option><option value='140'>140</option><option value='141'>141</option><option value='142'>142</option><option value='143'>143</option><option value='144'>144</option><option value='145'>145</option><option value='146'>146</option><option value='147'>147</option><option value='148'>148</option><option value='149'>149</option><option value='150'>150</option><option value='151'>151</option><option value='152'>152</option><option value='153'>153</option><option value='154'>154</option><option value='155'>155</option><option value='156'>156</option><option value='157'>157</option><option value='158'>158</option><option value='159'>159</option>");
        } else if (val == "4º Andar") {
            $("#sala").html("<option value='401'>401</option><option value='402'>402</option><option value='403'>403</option><option value='404'>404</option><option value='405'>405</option><option value='406'>406</option><option value='407'>407</option><option value='408'>408</option><option value='409'>409</option><option value='410'>410</option><option value='411'>411</option><option value='412'>412</option><option value='413'>413</option><option value='414'>414</option><option value='415'>415</option><option value='416'>416</option><option value='417'>417</option><option value='418'>418</option><option value='419'>419</option><option value='420'>420</option><option value='421'>421</option><option value='422'>422</option><option value='423'>423</option><option value='424'>424</option><option value='425'>425</option><option value='426'>426</option><option value='427'>427</option><option value='428'>428</option><option value='429'>429</option><option value='430'>430</option><option value='431'>431</option><option value='432'>432</option><option value='433'>433</option><option value='434'>434</option><option value='435'>435</option><option value='436'>436</option><option value='437'>437</option><option value='438'>438</option><option value='439'>439</option><option value='440'>440</option><option value='441'>441</option><option value='442'>442</option><option value='443'>443</option><option value='444'>444</option><option value='445'>445</option><option value='446'>446</option><option value='447'>447</option><option value='448'>448</option><option value='449'>449</option><option value='450'>450</option><option value='451'>451</option><option value='452'>452</option><option value='453'>453</option><option value='454'>454</option><option value='455'>455</option><option value='456'>456</option><option value='457'>457</option><option value='458'>458</option><option value='459'>459</option>");
        } else if (val == "5º Andar") {
            $("#sala").html("<option value='501'>501</option><option value='502'>502</option><option value='503'>503</option><option value='504'>504</option><option value='505'>505</option><option value='506'>506</option><option value='507'>507</option><option value='508'>508</option><option value='509'>509</option><option value='510'>510</option><option value='511'>511</option><option value='512'>512</option><option value='513'>513</option><option value='514'>514</option><option value='515'>515</option><option value='516'>516</option><option value='517'>517</option><option value='518'>518</option><option value='519'>519</option><option value='520'>520</option><option value='521'>521</option><option value='522'>522</option><option value='523'>523</option><option value='524'>524</option><option value='525'>525</option><option value='526'>526</option><option value='527'>527</option><option value='528'>528</option><option value='529'>529</option><option value='530'>530</option><option value='531'>531</option><option value='532'>532</option><option value='533'>533</option><option value='534'>534</option><option value='535'>535</option><option value='536'>536</option><option value='537'>537</option><option value='538'>538</option><option value='539'>539</option><option value='540'>540</option><option value='541'>541</option><option value='542'>542</option><option value='543'>543</option><option value='544'>544</option><option value='545'>545</option><option value='546'>546</option><option value='547'>547</option><option value='548'>548</option><option value='549'>549</option><option value='550'>550</option><option value='551'>551</option><option value='552'>552</option><option value='553'>553</option><option value='554'>554</option><option value='555'>555</option><option value='556'>556</option><option value='557'>557</option><option value='558'>558</option><option value='559'>559</option>");
        } else if (val == "6º Andar") {
            $("#sala").html("<option value='601'>601</option><option value='602'>602</option><option value='603'>603</option><option value='604'>604</option><option value='605'>605</option><option value='606'>606</option><option value='607'>607</option><option value='608'>608</option><option value='609'>609</option><option value='610'>610</option><option value='611'>611</option><option value='612'>612</option><option value='613'>613</option><option value='614'>614</option><option value='615'>615</option><option value='616'>616</option><option value='617'>617</option><option value='618'>618</option><option value='619'>619</option><option value='620'>620</option><option value='621'>621</option><option value='622'>622</option><option value='623'>623</option><option value='624'>624</option><option value='625'>625</option><option value='626'>626</option><option value='627'>627</option><option value='628'>628</option><option value='629'>629</option><option value='630'>630</option><option value='631'>631</option><option value='632'>632</option><option value='633'>633</option><option value='634'>634</option><option value='635'>635</option><option value='636'>636</option><option value='637'>637</option><option value='638'>638</option><option value='639'>639</option><option value='640'>640</option><option value='641'>641</option><option value='642'>642</option><option value='643'>643</option><option value='644'>644</option><option value='645'>645</option><option value='646'>646</option><option value='647'>647</option><option value='648'>648</option><option value='649'>649</option><option value='650'>650</option><option value='651'>651</option><option value='652'>652</option><option value='653'>653</option><option value='654'>654</option><option value='655'>655</option><option value='656'>656</option><option value='657'>657</option><option value='658'>658</option><option value='659'>659</option>");
        } else if (val == "7º Andar") {
            $("#sala").html("<option value='701'>701</option><option value='702'>702</option><option value='703'>703</option><option value='704'>704</option><option value='705'>705</option><option value='706'>706</option><option value='707'>707</option><option value='708'>708</option><option value='709'>709</option><option value='710'>710</option><option value='711'>711</option><option value='712'>712</option><option value='713'>713</option><option value='714'>714</option><option value='715'>715</option><option value='716'>716</option><option value='717'>717</option><option value='718'>718</option><option value='719'>719</option><option value='720'>720</option><option value='721'>721</option><option value='722'>722</option><option value='723'>723</option><option value='724'>724</option><option value='725'>725</option><option value='726'>726</option><option value='727'>727</option><option value='728'>728</option><option value='729'>729</option><option value='730'>730</option><option value='731'>731</option><option value='732'>732</option><option value='733'>733</option><option value='734'>734</option><option value='735'>735</option><option value='736'>736</option><option value='737'>737</option><option value='738'>738</option><option value='739'>739</option><option value='740'>740</option><option value='741'>741</option><option value='742'>742</option><option value='743'>743</option><option value='744'>744</option><option value='745'>745</option><option value='746'>746</option><option value='747'>747</option><option value='748'>748</option><option value='749'>749</option><option value='750'>750</option><option value='751'>751</option><option value='752'>752</option><option value='753'>753</option><option value='754'>754</option><option value='755'>755</option><option value='756'>756</option><option value='757'>757</option><option value='758'>758</option><option value='759'>759</option>");
        } else if (val == "8º Andar") {
            $("#sala").html("<option value='801'>801</option><option value='802'>802</option><option value='803'>803</option><option value='804'>804</option><option value='805'>805</option><option value='806'>806</option><option value='807'>807</option><option value='808'>808</option><option value='809'>809</option><option value='810'>810</option><option value='811'>811</option><option value='812'>812</option><option value='813'>813</option><option value='814'>814</option><option value='815'>815</option><option value='816'>816</option><option value='817'>817</option><option value='818'>818</option><option value='819'>819</option><option value='820'>820</option><option value='821'>821</option><option value='822'>822</option><option value='823'>823</option><option value='824'>824</option><option value='825'>825</option><option value='826'>826</option><option value='827'>827</option><option value='828'>828</option><option value='829'>829</option><option value='830'>830</option><option value='831'>831</option><option value='832'>832</option><option value='833'>833</option><option value='834'>834</option><option value='835'>835</option><option value='836'>836</option><option value='837'>837</option><option value='838'>838</option><option value='839'>839</option><option value='840'>840</option><option value='841'>841</option><option value='842'>842</option><option value='843'>843</option><option value='844'>844</option><option value='845'>845</option><option value='846'>846</option><option value='847'>847</option><option value='848'>848</option><option value='849'>849</option><option value='850'>850</option><option value='851'>851</option><option value='852'>852</option><option value='853'>853</option><option value='854'>854</option><option value='855'>855</option><option value='856'>856</option><option value='857'>857</option><option value='858'>858</option><option value='859'>859</option>");
        } else if (val == "9º Andar") {
            $("#sala").html("<option value='901'>901</option><option value='902'>902</option><option value='903'>903</option><option value='904'>904</option><option value='905'>905</option><option value='906'>906</option><option value='907'>907</option><option value='908'>908</option><option value='909'>909</option><option value='910'>910</option><option value='911'>911</option><option value='912'>912</option><option value='913'>913</option><option value='914'>914</option><option value='915'>915</option><option value='916'>916</option><option value='917'>917</option><option value='918'>918</option><option value='919'>919</option><option value='920'>920</option><option value='921'>921</option><option value='922'>922</option><option value='923'>923</option><option value='924'>924</option><option value='925'>925</option><option value='926'>926</option><option value='927'>927</option><option value='928'>928</option><option value='929'>929</option><option value='930'>930</option><option value='931'>931</option><option value='932'>932</option><option value='933'>933</option><option value='934'>934</option><option value='935'>935</option><option value='936'>936</option><option value='937'>937</option><option value='938'>938</option><option value='939'>939</option><option value='940'>940</option><option value='941'>941</option><option value='942'>942</option><option value='943'>943</option><option value='944'>944</option><option value='945'>945</option><option value='946'>946</option><option value='947'>947</option><option value='948'>948</option><option value='949'>949</option><option value='950'>950</option><option value='951'>951</option><option value='952'>952</option><option value='953'>953</option><option value='954'>954</option><option value='955'>955</option><option value='956'>956</option><option value='957'>957</option><option value='958'>958</option><option value='959'>959</option>");
        }else if (val == "default") {
            $("#sala").html("<option value=''>Selecione</option>");
        }
    });
});

$("#ramal").inputmask();

function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.display = '';
        document.getElementById('yesCheck').removeAttribute("name"); 
        document.getElementById('cargo').setAttribute("disabled", "true"); 
        // document.getElementById('departamento').removeAttribute("disabled");
        document.getElementById('departamento').setAttribute("disabled", "true"); 
        document.getElementById('cargoVin').setAttribute("name", "cargo");
        document.getElementById('cargoDiv').style.display = 'none';
        document.getElementById('cargofuncao').style.display = 'none';
    }
    if(document.getElementById('noCheck').checked){
        document.getElementById('yesCheck').setAttribute("name", "vinculo");
        document.getElementById('yesCheck').checked = false;
        document.getElementById('noCheck').checked = true;
        document.getElementById('cargo').removeAttribute("disabled"); 
        document.getElementById('cargoVin').removeAttribute("name"); 
        document.getElementById('ifYes').style.display = 'none';
        document.getElementById('cargoDiv').style.display = '';
        document.getElementById('cargofuncao').style.display = '';
    }
}

// $(document).ready(function()
// {
//     function selectPetBreed()
//     {
//         var petType = $("#andar").val();
//         if (petType == "Terreo"){
//             $("#sala").attr("list","terreo");
//         };
//         if (petType == "Subsolo"){
//             $("#sala").attr("list","subsolo");
//         };
//         if (petType == "1º Andar"){
//             $("#sala").attr("list","sala1");
//         };
//         if (petType == "2º Subsolo"){
//             $("#sala").attr("list","segsubsolo");
//         }
//         // if (petType == "3º Andar"){
//         //     $("#sala").attr("list","sala3");
//         // }
//         if (petType == "4º Andar"){
//             $("#sala").attr("list","sala4");
//         }
//         if (petType == "5º Andar"){
//             $("#sala").attr("list","sala5");
//         }
//         if (petType == "6º Andar"){
//             $("#sala").attr("list","sala6");
//         }
//         if (petType == "7º Andar"){
//             $("#sala").attr("list","sala7");
//         }
//         if (petType == "8º Andar"){
//             $("#sala").attr("list","sala8");
//         }
//         if (petType == "9º Andar"){
//             $("#sala").attr("list","sala9");
//         }

//         var segsubsolo = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
//         var subsolo = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
//         var terreo = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
//         var sala1 = ['101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120','121','122','123','124','125','126','127','128','129','130','131','132','133','134','135','136','137','138','139','140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159'];
//         var sala4 = ['401','402','403','404','405','406','407','408','409','410','411','412','413','414','415','416','417','418','419','420','421','422','423','424','425','426','427','428','429','430','431','432','433','434','435','436','437','438','439','440','441','442','443','444','445','446','447','448','449','450','451','452','453','454','455','456','457','458','459'];
//         var sala5 = ['501','502','503','504','505','506','507','508','509','510','511','512','513','514','515','516','517','518','519','520','521','522','523','524','525','526','527','528','529','530','531','532','533','534','535','536','537','538','539','540','541','542','543','544','545','546','547','548','549','550','551','552','553','554','555','556','557','558','559'];
//         var sala6 = ['601','602','603','604','605','606','607','608','609','610','611','612','613','614','615','616','617','618','619','620','621','622','623','624','625','626','627','628','629','630','631','632','633','634','635','636','637','638','639','640','641','642','643','644','645','646','647','648','649','650','651','652','653','654','655','656','657','658','659'];
//         var sala7 = ['701','702','703','704','705','706','707','708','709','710','711','712','713','714','715','716','717','718','719','720','721','722','723','724','725','726','727','728','729','730','731','732','733','734','735','736','737','738','739','740','741','742','743','744','745','746','747','748','749','750','751','752','753','754','755','756','757','758','759'];
//         var sala8 = ['801','802','803','804','805','806','807','808','809','810','811','812','813','814','815','816','817','818','819','820','821','822','823','824','825','826','827','828','829','830','831','832','833','834','835','836','837','838','839','840','841','842','843','844','845','846','847','848','849','850','851','852','853','854','855','856','857','858','859'];
//         var sala9 = ['901','802','903','904','905','906','907','908','909','910','911','912','913','914','915','916','917','918','919','920','921','922','923','924','925','926','927','928','929','930','931','932','933','934','935','936','937','938','939','940','941','942','943','944','945','946','947','948','949','950','951','952','953','954','955','956','957','958','959'];

//         var listsegsubsolo = document.getElementByClass('segsubsolo');
//         var listsubsolo = document.getElementByClass('subsolo');
//         var listterreo = document.getElementByClass('terreo');
//         var listsala1 = document.getElementByClass('sala1');
//         var listsala4 = document.getElementByClass('sala4');
//         var listsala5 = document.getElementByClass('sala5');
//         var listsala6 = document.getElementByClass('sala6');
//         var listsala7 = document.getElementByClass('sala7');
//         var listsala8 = document.getElementByClass('sala8');
//         var listsala9 = document.getElementByClass('sala9');

//         segsubsolo.forEach(function(item){
//            var option = document.createElement('option');
//            option.value = item;
//            listsegsubsolo.appendChild(option);
//         });

//         subsolo.forEach(function(item){
//            var option = document.createElement('option');
//            option.value = item;
//            listsubsolo.appendChild(option);
//         });

//         terreo.forEach(function(item){
//            var option = document.createElement('option');
//            option.value = item;
//            listterreo.appendChild(option);
//         });

//         sala1.forEach(function(item){
//            var option = document.createElement('option');
//            option.value = item;
//            listsala1.appendChild(option);
//         });

//         sala4.forEach(function(item){
//            var option = document.createElement('option');
//            option.value = item;
//            listsala4.appendChild(option);
//         });

//         sala5.forEach(function(item){
//            var option = document.createElement('option');
//            option.value = item;
//            listsala5.appendChild(option);
//         });

//         sala6.forEach(function(item){
//            var option = document.createElement('option');
//            option.value = item;
//            listsala6.appendChild(option);
//         });

//         sala7.forEach(function(item){
//            var option = document.createElement('option');
//            option.value = item;
//            listsala7.appendChild(option);
//         });

//         sala8.forEach(function(item){
//            var option = document.createElement('option');
//            option.value = item;
//            listsala8.appendChild(option);
//         });

//         sala9.forEach(function(item){
//            var option = document.createElement('option');
//            option.value = item;
//            listsala9.appendChild(option);
//         });

//     };
//     $('#andar').bind("change", selectPetBreed);
// });

