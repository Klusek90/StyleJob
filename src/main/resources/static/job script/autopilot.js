$("#pAuto").click(function (){

    $("#fdata2").css("display","inline");
    let choose = $("#fdata").val();
    switch (choose){
        case "XML":
            $("#fdata2").html("");
            $("#fdata2").append(
                '<option>reset.pl</option>'+
                '<option>xl2xml.pl</option>'+
                '<option>test3</option>'); break
        case "PDF":
            $("#fdata2").html("");
            $("#fdata2").append(
                '<option>pdf.pl</option>');break
    }
});