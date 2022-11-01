
$("#p1").click(function (){

    $("#fdata2").css("display","inline");
    let choose = $("#fdata").val();
   switch (choose){
       case "XML":
           $("#fdata2").html("");
           $("#fdata2").append(
               '<option>reset.pl</option>'+
               '<option>xl2xml.pl</option>'); break
       case "PDF":
           $("#fdata2").html("");
           $("#fdata2").append(
               '<option>pdf.pl</option>');break
       case "CSV":
           $("#fdata2").html("");
           $("#fdata2").append(
               '<option>csv.pl</option>'+
               '<option>csv-header.pl</</option>'+
               '<option>csv-header-ah.pl</option>'); break
       case "TXT":
           $("#fdata2").html("");
           $("#fdata2").append(
               '<option>txt-gt.pl</option>'+
               '<option>txt-gtp.pl</option>'+
               '<option>txt-comma-header-utf8.pl</option>'+
               '<option>txt-comma.pl</option>'+
               '<option>txt-pipe-header.pl</option>'+
               '<option>txt-halton.pl 8</option>'+
               '<option>txt-halton.pl 50</option>'+
               '<option>txt-semi-colon-header-utf8.pl</option>'+
               '<option>txt-comma-header.pl</option>'); break
       case "ZIP":
           $("#fdata2").html("");
           $("#fdata2").append(
               '<option>zipped-pip-csv-rems.pl</option>'+
               '<option>zipped-xl2xml.pl 0 0</option>'+
               '<option>zipped-xl2xml.pl 2 4</option>'); break

   }
});