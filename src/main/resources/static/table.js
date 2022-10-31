

function create(columnsNum, rowNum, solid, header,list,alignR) {

    let s;
    let h;
    let r;

    if (solid == 1) {
        s = " border=\"solid\""
    } else {
        s = ""
    }
    ;

    if (header == 1) {
        h = " font-weight=\"bold\""
    } else {
        h = ""
    }
    ;

    if (alignR == 1) {
        r = " text-align=\"right\""
    } else{
        r = ""
   };




  let columns ="";
for(let c=1;c<=columnsNum;c++){
    columns = columns+ '\n\t\t<fo:table-column column-width=\"'+list[c]+'%\"/>';

}

    let rows= "";

    for(let i=1;i<=rowNum;i++){

       let rowBlock ="";

        for(let j=1;j<=(columnsNum);j++){
            if (j==columnsNum) {
                rowBlock += '\n\t\t\t\t<fo:table-cell>' +
                    '\n\t\t\t\t\t<fo:block' + h +  r +'>' +
                    '\n\t\t\t\t\t\t Text' + i + "." + j +
                    '\n\t\t\t\t\t</fo:block>' +
                    '\n\t\t\t\t</fo:table-cell>';
            }else{
                rowBlock += '\n\t\t\t\t<fo:table-cell>' +
                    '\n\t\t\t\t\t<fo:block' + h +'>' +
                    '\n\t\t\t\t\t\t Text' + i + "." + j +
                    '\n\t\t\t\t\t</fo:block>' +
                    '\n\t\t\t\t</fo:table-cell>';
            }

        }

        rows = rows +'\n\t\t\t<fo:table-row>'+ rowBlock+'\n\t\t\t</fo:table-row>';
        h = "";
    }

    let tab = '<fo:block-container font-size=\"8.5pt\"'+s+'>' +
        '\n\t<fo:table>' +
        columns +
        '\n\t\t<fo:body>' +
        rows +
        '\n\t\t</fo:body>' +
        '\n\t</fo:table>' +
        '\n</fo:block-container>';

return tab;
}

function addFields(columnsNum){
    $(".colsize").html("");
    for(let x =1;x<=columnsNum;x++ ){
    $('.colsize').append('<span>Col'+x+' </span><input type="text" id="colsize'+x+'"><br>');}
}



$("#create").click(function (){
    let x =$('#col').val();
    let y = $('#row').val()
    let s;
    let h;
    let r;


    let solid = document.getElementById("solid");
    let header =document.getElementById("sheaders");
    let right = document.getElementById("align-right")

    if (solid.checked==true){
        s = 1
    }else {
        s = 0
    }

    if (header.checked==true){
        h = 1
    }else {
        h = 0
    }

    if (right.checked==true){
        r = 1
    }else {
        r = 0
    }


    colList = [];
    for (let i =1; i<=x;i++){
        colList[i]= 20;
    };

    addFields(x);
    let details = create(x,y,s,h,colList,r);
$('textarea.text').val(details);

// $("#title").css("display", "block")
});


$("#update").click(function (){
    let x =$('#col').val();
    let y = $('#row').val()
    let s;
    let h;
    let r;


    let solid = document.getElementById("solid");
    let header =document.getElementById("sheaders");
    let right = document.getElementById("align-right")

    if (solid.checked==true){
        s = 1
    }else {
        s = 0
    }

    if (header.checked==true){
        h = 1
    }else {
        h = 0
    }

    if (right.checked==true){
        r = 1
    }else {
        r = 0
    }


    colList = [];
    for (let i =1; i<=x;i++){
        colList[i]= $('#colsize'+i).val();
    };

    let details = create(x,y,s,h,colList,r);
    $('textarea.text').val(details);

    for (let i =1; i<=x;i++){
        $("#colsize"+i) = colList[i];
    };

});