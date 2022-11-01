let regnum=1;
let click =2;

function create(){

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


    let script = $("#fdata2").val();



    // let Singprocess =
    let process = '\n\t\t<process>'+
                        '\n\t\t\t<position>1</position>'+
                        '\n\t\t\t<script>'+ script + '</script>'+
                 '\n\t\t</process>';



    let back = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>'+ '\n<job>'+
        '\n\t<name>'+name+'</name>' + '\n\t<regex>'+reg1+reg2+reg3+reg4+'</regex>' +'\n\t<processes>' + process +'\n\t</processes>'+'\n</job>';

    return back
};

$(".add").click(function () {


    if(click===4){click=4}
    else{click++}

    console.log(click);
    $("#field"+(click)).css("display","block");
});
$(".del").click(function () {

    $("#field"+(click)).css("display","none");
    if (click===2){click=2}
    else{click--}

console.log(click);

});



$("#create").click(function () {



    let details =create() ;
    $('textarea.text').val(details);

});