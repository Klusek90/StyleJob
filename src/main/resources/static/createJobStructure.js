
$("#create").click(function (){

    let select= $("#1stScript option:selected").val()
    let code="\n\t\t<process>\n" +
        "\t\t\t<position>"+1+"</position>\n" +
        "\t\t\t<script>"+select+"</script>\n" +
        "\t\t</process>";

    console.log($("1stScript").val())



    let job =$(".jobStructure").children(":first").html()

    console.log(job)

    for (let i =2;i < 15; i++){
        if (code.includes("mailsort"))
        {
            code += checkSequence(i,i+3)
        }
        else
        {

            code += checkSequence(i,i)
        }
    }

    let wrap =document.getElementById("wraper");
    if (wrap.checked == true)
    {
    code = jobDesign(code)
    }
    $('textarea.text').val(code)



})

function checkSequence(child, position){

    let name= $("#filename").val();
    let compare = $(".jobStructure p:nth-child("+child+")").html()
    let code
    switch (compare){
        case "Autopilot":
            code=   '\n\t\t<process>' +
                    '\n\t\t\t<position>' + position + '</position>' +
                    '\n\t\t\t<script>Autopilot</script>' +
                    '\n\t\t\t<application>'+name+'</application>' +              //add app name
                    '\n\t\t\t<extension>PS</extension>' +                       //add extenstion
                    '\n\t\t\t<quantity>count(/data/items/item)</quantity>'+
                    '\n\t\t</process>';
            break
        case "Foppy":
            code=   "\n\t\t<process spoils=\"true\">" +
                    "\n\t\t\t<position>"+position+"</position>" +
                    "\n\t\t\t<script>foppy.pl</script>" +
                    "\n\t\t\t<dir>foppy/"+name+"</dir>" +
                    "\n\t\t\t<xsl>Letters.xsl</xsl>" +
                    "\n\t\t\t<duplex>0</duplex>"+
                    "\n\t\t\t<output-folder>1. data to run/xerox</output-folder>" +
                    "\n\t\t</process>";
            break
        case "Reset":
            code=   "\n\t\t<process>" +
                    "\n\t\t\t<position>"+position+"</position>" +
                    "\n\t\t\t<script>reset.pl</script>" +
                    "\n\t\t</process>";
            break
        case "Chain":
            code = "\n\t\t<process>" +
                    "\n\t\t\t<position>"+position+"</position>" +
                    "\n\t\t\t<script>Chain</script>" +
                    "\n\t\t</process>";
            break
        case "Report":
            code = "\n\t\t<process>" +
                "\n\t\t\t<position>"+position+"</position>" +
                "\n\t\t\t<script>report.pl</script>" +
                "\n\t\t\t<extension>rpt</extension>" +
                "\n\t\t\t<output-folder>1. data to run/reports</output-folder>" +
                "\n\t\t\t<lines>" +
                "\n\t\t\t\t<line><chunks><chunk>"+name+" Suppression Report</chunk></chunks></line>" +
                "\n\t\t\t\t<line><chunks><chunk>-------------------------------------------------------------------------</chunk></chunks></line>" +
                "\n\t\t\t\t<line/>" +
                "\n\t\t\t\t<line><chunks><chunk>Input filename: </chunk><chunk><xpath>/data/metadata/filename</xpath></chunk></chunks></line>" +
                "\n\t\t\t\t<line/>" +
                "\n\t\t\t\t<line><chunks><chunk>Processed on: </chunk><chunk><xpath>/data/metadata/datestamp</xpath></chunk></chunks></line>" +
                "\n\t\t\t\t<line><chunks><chunk>Processed at: </chunk><chunk><xpath>/data/metadata/timestamp</xpath></chunk></chunks></line>" +
                "\n\t\t\t\t<line/>" +
                "\n\t\t\t\t<line><chunks><chunk>Total records: </chunk><chunk><xpath>count(/data/items/item)</xpath></chunk></chunks></line>" +
                "\n\t\t\t\t<line/>" +
                "\n\t\t\t\t<line><chunks><chunk>Number of suppressed records: </chunk><chunk><xpath>count(/data/metadata/suppressions/suppressed)</xpath></chunk></chunks></line>" +
                "\n\t\t\t\t<line/>" +
                "\n\t\t\t\t<line><chunks><chunk>Suppressed records:</chunk></chunks></line>" +
                "\n\t\t\t\t<line/>" +
                "\n\t\t\t\t<line repeat-for-each=\"/data/metadata/suppressions/suppressed\">" +
                "\n\t\t\t\t\t<chunks>" +
                "\n\t\t\t\t\t\t<chunk>Account Name: </chunk><chunk><xpath>fields/field[name = 'Account']/value</xpath></chunk>" +
                "\n\t\t\t\t\t\t<chunk> Account Number: </chunk><chunk><xpath>fields/field[name = 'Number']/value</xpath></chunk>" +
                "\n\t\t\t\t\t\t<chunk> Post Code: </chunk><chunk><xpath>fields/field[name = 'PostCode']/value</xpath></chunk>" +
                "\n\t\t\t\t\t</chunks>" +
                "\n\t\t\t\t</line>" +
                "\n\t\t\t\t<line/>" +
                "\n\t\t\t\t</lines>" +
                "\n\t\t</process>";
            break
        case "Mailcheck (MCK)":
            code= "\n\t\t<process>\n" +
                    "\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>mailcheck.pl</script>\n" +
                    "\t\t\t<output-folder>1. data to run/archive</output-folder>\n" +
                    "\t\t\t<fields>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>1</position>\n" +
                    "\t\t\t\t\t<xpath>/data/metadata/filename</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>2</position>\n" +
                    "\t\t\t\t\t<xpath>field4</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>3</position>\n" +
                    "\t\t\t\t\t<xpath>field5</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>4</position>\n" +
                    "\t\t\t\t\t<xpath>field6</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>5</position>\n" +
                    "\t\t\t\t\t<xpath>field7</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>6</position>\n" +
                    "\t\t\t\t\t<xpath>field8</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>7</position>\n" +
                    "\t\t\t\t\t<xpath>field9</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>8</position>\n" +
                    "\t\t\t\t\t<xpath>field10</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t</fields>\n" +
                    "\t\t</process>"
            ;break
        case "PostScript":
            code = "\n\t\t<process spoils=\"true\">\n" +
                    "\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>postscript-xerox-opt.pl</script>\n" +
                    "\t\t\t<dir>"+name+"</dir>\n" +
                    "\t\t\t<xsl>"+name+".xsl</xsl>\n" +
                    "\t\t\t<output-folder>1. data to run/xerox</output-folder>\n" +
                    "\t\t</process>"

            ;break

        case "LookUp":
            code = "\n\t\t<process>\n" +
                    "\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>lookup-palmer.pl</script>\n" +
                    "\t\t\t<lookup>[look up file name]</lookup>\n" +
                    "\t\t\t<lookup-entry>/data/items/item</lookup-entry>\n" +
                    "\t\t\t<lookup-field>[accountID]</lookup-field>\n" +
                    "\t\t\t<match-field>[accountnumber]</match-field>\n" +
                    "\t\t\t<fields>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>1</position>\n" +
                    "\t\t\t\t\t<xpath>sheet</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t</fields>\n" +
                    "\t\t</process>"
            ;break
        case "MailSort":
            code=   "\n\t\t<process>" +
                    "\n\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>pre-mailsort.pl</script>\n" +
                    "\t\t\t<delimiter>|</delimiter>\n" +
                    "\t\t\t<template>TNT DSA 8 Mailmark W</template>\n" +
                    "\t\t\t<fields>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>1</position>\n" +
                    "\t\t\t\t\t<xpath>urn</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>2</position>\n" +
                    "\t\t\t\t\t<xpath>uuid</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>3</position>\n" +
                    "\t\t\t\t\t<xpath>address1</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>4</position>\n" +
                    "\t\t\t\t\t<xpath>address2</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>5</position>\n" +
                    "\t\t\t\t\t<xpath>address3</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>6</position>\n" +
                    "\t\t\t\t\t<xpath>address4</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>7</position>\n" +
                    "\t\t\t\t\t<xpath>address5</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>8</position>\n" +
                    "\t\t\t\t\t<xpath>address6</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>9</position>\n" +
                    "\t\t\t\t\t<xpath>address7</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>10</position>\n" +
                    "\t\t\t\t\t<xpath>address8</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t</fields>\n" +
                    "\t\t</process>\n" +
                    "\t\t<process>\n" +
                    "\t\t\t<position>"+(position +1) +"</position>\n" +
                    "\t\t\t<script>Matchcode</script>\n" +
                    "\t\t</process>\n" +
                    "\t\t<process>\n" +
                    "\t\t\t<position>"+(position +2) +"</position>\n" +
                    "\t\t\t<script>Sortcode</script>\n" +
                    "\t\t</process>\n" +
                    "\t\t<process>\n" +
                    "\t\t\t<position>"+(position +3) +"</position>\n" +
                    "\t\t\t<script>post-mailsort.pl</script>\n" +
                    "\t\t\t<delimiter>|</delimiter>\n" +
                    "\t\t\t<template>TNT DSA 8 Mailmark W</template>\n" +
                    "\t\t\t<fields>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>1</position>\n" +
                    "\t\t\t\t\t<xpath>urn</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>2</position>\n" +
                    "\t\t\t\t\t<xpath>uuid</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>3</position>\n" +
                    "\t\t\t\t\t<xpath>address1</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>4</position>\n" +
                    "\t\t\t\t\t<xpath>address2</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>5</position>\n" +
                    "\t\t\t\t\t<xpath>address3</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>6</position>\n" +
                    "\t\t\t\t\t<xpath>address4</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>7</position>\n" +
                    "\t\t\t\t\t<xpath>address5</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>8</position>\n" +
                    "\t\t\t\t\t<xpath>address6</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>9</position>\n" +
                    "\t\t\t\t\t<xpath>address7</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>10</position>\n" +
                    "\t\t\t\t\t<xpath>address8</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t</fields>\n" +
                    "\t\t</process>"
            ;break

        case "Split":
            code = "\n\t\t<process>\n" +
                    "\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>split-quantity.pl</script>\n" +
                    "\t\t\t<quantity>5000</quantity>\n" +
                    "\t\t\t<oldpart>[append]</oldpart>\n" +
                    "\t\t\t<newpart>_[index]</newpart>\n" +
                    "\t\t\t</process>"
            ;break
        case "PDF 2.5":
            code = "\n\t\t<process>\n" +
                    "\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>pdf-2.5.pl</script>\n" +
                    "\t\t\t<duplex>1</duplex>\n" +
                    "\t\t\t<dir>BTS PTX Animal Friends</dir>\n" +
                    "\t\t\t<xsl>cheques.xsl</xsl>\n" +
                    "\t\t\t<output-folder>1. data to run/pdf</output-folder>\n" +
                    "\t\t</process>"
            ; break

        // case "XL2XL":
        //     code = "\n\t\t<process>\n" +
        //         "\t\t\t<position>"+position+"</position>\n" +
        //         "\t\t\t<script>xl2xml.pl</script>\n" +
        //         "\t\t</process>"
        //     ; break
        default: code=""; break
    }
    return code
}


function jobDesign(body){

    let name= $("#filename").val();
    let reg1= $("#regx1").val();
    let reg2= $("#regx2").val().length;
    reg2='\\d{'+reg2+'}';

    let reg3= $("#regx3").val().length;
    let reg4= $("#regx4").val().length;

    if (reg3>0){
        reg3="_\\d{"+reg3+"}";
    }else{
        reg3="";
    }
    if (reg4>0){
        reg4="_\\d{"+reg4+"}";
    }else{
        reg4="";
    }
    let job = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>'+ '\n<job>'+
        '\n\t<name>'+name+'</name>' + '\n\t<regex>'+reg1+reg2+reg3+reg4+'</regex>' +'\n\t<processes>' +
        body +'\n\t</processes>'+'\n</job>';
   return job
}

let press =2;


$(".add").click(function () {


    if(press===4){press=4}
    else{press++}

    console.log(press);
    $("#field"+press).css("display","block");
});
$(".del").click(function () {

    $("#field"+press).css("display","none");
    if (press===2){press=2}
    else{press--}

    console.log(press);

});