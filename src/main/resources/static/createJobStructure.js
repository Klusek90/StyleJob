
$("#create").click(function (){

    let code="";
    for (let i =1;i < 10; i++){
        code += checkSequence(i,i)
    }

    code = jobDesign(code)
    $('textarea.text').val(code)



})

function checkSequence(child, position){
    let compare = $(".jobStructure p:nth-child("+child+")").html()
    let code
    switch (compare){
        case "Autopilot":
            code=   '\n\t\t<process>' +
                    '\n\t\t\t<position>' + position + '</position>' +
                    '\n\t\t\t<script>Autopilot</script>' +
                    '\n\t\t\t<application>Appname</application>' +              //add app name
                    '\n\t\t\t<extension>PS</extension>' +                       //add extenstion
                    '\n\t\t\t<quantity>count(/data/items/item)</quantity>'+
                    '\n\t\t</process>';
            break
        case "Foppy":
            code=   "\n\t\t<process spoils=\"true\">" +
                    "\n\t\t\t<position>"+position+"</position>" +
                    "\n\t\t\t<script>foppy.pl</script>" +
                    "\n\t\t\t<dir>foppy/[path]</dir>" +
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
            ;break
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