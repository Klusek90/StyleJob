
$("#create").click(function (){

    // select option for 1st postion job script
    let select= $("#1stScript option:selected").val()
    let code="\n\t\t<process>\n" +
        "\t\t\t<position>1</position>\n" +
        "\t\t\t<script>"+select+"</script>\n" +
        "\t\t</process>";



    // logic to correct mailsort position
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
    code = jobDesign(code)
    $('textarea.text').val(code)

})

function checkSequence(child, position){
    let duplex;
    if($("#duplex option:selected").val()==='Yes'){
        duplex=1
    }else { duplex=0 }

    let extension;
    if($("#extenstion option:selected").val()==='Ps'){
        extension='ps'
    }else { extension='pdf' }


    let name= $("#filename").val();
    let compare = $(".jobStructure p:nth-child("+child+")").html()
    let code
    switch (compare){
        case "Autopilot":
            code=   '\n\t\t<process>' +
                    '\n\t\t\t<position>' + position + '</position>' +
                    '\n\t\t\t<script>Autopilot</script>' +
                    '\n\t\t\t<application>'+name+'</application>' +              //add app name
                    '\n\t\t\t<extension>'+extension+'</extension>' +                       //add extenstion
                    '\n\t\t\t<quantity>count(/data/items/item)</quantity>'+
                    '\n\t\t</process>';
            break
        case "Foppy":
            code=   "\n\t\t<process spoils=\"true\">" +
                    "\n\t\t\t<position>"+position+"</position>" +
                    "\n\t\t\t<script>foppy.pl</script>" +
                    "\n\t\t\t<dir>foppy/"+name+"</dir>" +
                    "\n\t\t\t<xsl>Letters.xsl</xsl>" +
                    "\n\t\t\t<duplex>"+duplex+"</duplex>"+
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
                    "\t\t\t<duplex>"+duplex+"</duplex>\n"+
                    "\t\t\t<dir>"+name+"</dir>\n" +
                    "\t\t\t<xsl>Letter.xsl</xsl>\n" +
                    "\t\t\t<output-folder>1. data to run/xerox</output-folder>\n" +
                    "\t\t</process>"

            ;break

        case "LookUp":
            code = "\n\t\t<process>\n" +
                    "\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>lookup.pl</script>\n" +
                "\t\t<!-- lookup file-->\n"+
                    "\t\t\t<lookup>[look up file path]</lookup>\n" +
                    "\t\t\t<lookup-entry>/data/items/item</lookup-entry>\n" +
                    "\t\t\t<lookup-field>[field in lookup]</lookup-field>\n" +
                    "\t\t\t<match-field>[field in data]</match-field>\n" +
                    "\t\t\t<fields>\n" +
                    "\t\t\t\t<field>\n" +
                    "\t\t\t\t\t<position>1</position>\n" +
                    "\t\t\t\t\t<xpath>sheet</xpath>\n" +
                    "\t\t\t\t</field>\n" +
                    "\t\t\t</fields>\n" +
                    "\t\t</process>"
            ;break
        case "MailSort":
            $(".mailsortOption").css("display","block")
            code = mailsort(position);
            ;break

        case "Split":
            $(".splitOption").css("display","block")
            code = SplitFunction(position);
            ;break
        case "PDF 2.5":
            code = "\n\t\t<process spoils=\"true\">\n" +
                    "\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>pdf-2.5.pl</script>\n" +
                    "\t\t\t<duplex>"+duplex+"</duplex>\n" +
                    "\t\t\t<dir>"+name+"</dir>\n" +
                    "\t\t\t<xsl>Letters.xsl</xsl>\n" +
                    "\t\t\t<output-folder>1. data to run/pdf</output-folder>\n" +
                    "\t\t</process>"
            ; break

        case "New field":
            code = "\n\t\t<process>\n" +
                "\t\t\t<position>"+position+"</position>\n" +
                "\t\t\t<script>new-field.pl</script>\n" +
                "\t\t\t<fields>\n" +
                "\t\t\t\t<field>\n" +
                "\t\t<!-- new field name-->\n"+
                "\t\t\t\t\t<name>(field_name)</name>\n" +
                "\t\t<!-- new filed content-->\n"+
                "\t\t\t\t\t<xpath>concat(title,' ',first_name,' ',surname)</xpath>\n" +
                "\t\t\t\t</field>\n" +
                "\t\t\t</fields>"+
                "\t\t</process>"
            ; break

        case "Individuals":
            code = "\n\t\t<process>\n" +
                    "\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>IndividualPDFs</script>\n" +
                    "\t\t\t<format>simple-pdf</format>\n" +
                    "\t\t\t<duplex>"+duplex+"</duplex>\n" +
                    "\t\t\t<dir>Engage Rochford Council Tax Notifications</dir>\n" +
                    "\t\t\t<xsl>letter.xsl</xsl>\n" +
                    "\t\t\t<output-folder>\\\\ns004\\R_Drive\\1. data to run\\engage\\Rochford\\Ctax_Notifications</output-folder>\n" +
                    "\t\t\t<output-filename>pdf-filename</output-filename>\n" +
                    "\t\t\t<zip>false</zip>\n" +
                    "\t\t</process>"
            ; break
        case "Suppress":
            code = "\n\t\t<process>\n" +
                    "\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>suppress.pl</script>\n" +
                    "\t\t\t<suppressions>\n" +
                    "\t\t\t\t<suppression>\n" +
                    "\t\t\t\t\t<description>[suppress field name]</description>\n" +
                    "\t\t\t\t\t<xpath>[field]=[/logic]</xpath>\n" +
                    "\t\t\t\t</suppression>\n" +
                    "\t\t\t</suppressions>\n" +
                    "\t\t</process>"
            ; break
        case "Simple Reducer":
            code = "<process spoils=\"true\">\n" +
                    "\t\t\t<position>"+position+"</position>\n" +
                    "\t\t\t<script>simple-reducer.pl</script>\n" +
                    "\t\t\t<output-folder>1. data to run/xerox</output-folder>\n" +
                    "\t\t\t<colour>false</colour>\n" +
                    "\t\t\t<duplex>"+duplex+"</duplex>\n" +
                    "\t\t\t<version>2</version>\n" +
                    "\t\t\t<separators>\n" +
                    "\t\t\t\t<separator>\n" +
                    "\t\t\t\t\t<pages>0</pages>\n" +
                    "\t\t\t\t\t<message>[separator]</message>\n" +
                    "\t\t\t\t</separator>\n" +
                    "\t\t\t</separators>\n" +
                    "\t\t\t<elements>\n" +
                    "\t\t\t\t<element>\n" +
                    "\t\t\t\t\t<id>Address Remover</id>\n" +
                    "\t\t\t\t\t<x>80</x>\n" +
                    "\t\t\t\t\t<y>617</y>\n" +
                    "\t\t\t\t\t<width>200</width>\n" +
                    "\t\t\t\t\t<height>100</height>\n" +
                    "\t\t\t\t</element>\n" +
                    "\t\t\t\t<element>\n" +
                    "\t\t\t\t\t<id>Address Rewriter</id>\n" +
                    "\t\t\t\t\t<x>63</x>\n" +
                    "\t\t\t\t\t<y>735</y>\n" +
                    "\t\t\t\t\t<width>180</width>\n" +
                    "\t\t\t\t\t<height>110</height>\n" +
                    "\t\t\t\t\t<bottom-up>true</bottom-up>\n" +
                    "\t\t\t\t</element>\n" +
                    "\t\t\t\t<element>\n" +
                    "\t\t\t\t\t<id>CBC</id>\n" +
                    "\t\t\t\t\t<x>63</x>\n" +
                    "\t\t\t\t\t<y>605</y>\n" +
                    "\t\t\t\t</element>\n" +
                    "\t\t\t\t<element>\n" +
                    "\t\t\t\t\t<id>OMR Top</id>\n" +
                    "\t\t\t\t\t<x>115</x>\n" +
                    "\t\t\t\t\t<y>820</y>\n" +
                    "\t\t\t\t</element>\n" +
                    "\t\t\t\t<element>\n" +
                    "\t\t\t\t\t<id>Control</id>\n" +
                    "\t\t\t\t\t<x>51</x>\n" +
                    "\t\t\t\t\t<y>590</y>\n" +
                    "\t\t\t\t\t<rotate>90</rotate>\n" +
                    "\t\t\t\t</element>\n" +
                    "\t\t\t\t<element>\n" +
                    "\t\t\t\t\t<id>Datamatrix</id>\n" +
                    "\t\t\t\t\t<x>245</x>\n" +
                    "\t\t\t\t\t<y>600</y>\n" +
                    "\t\t\t\t</element>\n" +
                    "\t\t\t\t<element>\n" +
                    "\t\t\t\t\t<id>Mailsort</id>\n" +
                    "\t\t\t\t\t<x>247</x>\n" +
                    "\t\t\t\t\t<y>652</y>\n" +
                    "\t\t\t\t</element>\n" +
                    "\t\t\t\t<element>\n" +
                    "\t\t\t\t\t<id>Fusion Barcode</id>\n" +
                    "\t\t\t\t\t<x>11</x>\n" +
                    "\t\t\t\t\t<y>644</y>\n" +
                    "\t\t\t\t</element>\n" +
                    "\t\t\t</elements>\n" +
                    "\t\t</process>"
                ; break


        default: code=""; break
    }
    return code
}


function jobDesign(body){

    let regExp =/[a-zA-z]/;
    let name= $("#filename").val();
    let reg1= $("#regx1").val();
    let reg2= $("#regx2").val();
    let reg3= $("#regx3").val();
    let reg4= $("#regx4").val();
    let x2='d' ,x3='d',x4='d';





    if (reg2.length>0){
        if (regExp.test(reg2)) { x2='w'};
        reg2="_\\"+x2+"{"+reg2.length+"}";
    } else {
        reg2 = "";
    }

    if (reg3.length>0){
        if (regExp.test(reg3)) { x3='w'};
        reg3="_\\"+x3+"{"+reg3.length+"}";
    } else {
        reg3 = "";
    }


    if (reg4.length>0){
        if (regExp.test(reg4)) { x4='w'};
        reg4="_\\"+x4+"{"+reg4.length+"}";
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

    $("#field"+press).css("display","block");
});
$(".del").click(function () {

    $("#field"+press).css("display","none");
    if (press===2){press=2}
    else{press--}


});
