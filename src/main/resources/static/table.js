

function create(columnsNum, rowNum,list) {

    //--------checkboxes-----------
    let s = document.getElementById("solid");
    let h =document.getElementById("sheaders");
    let r = document.getElementById("align-right");

    if (s.checked==true) {
        s = " border=\"solid\""
    } else {
        s = ""
    }
    ;

    if (h.checked==true) {
        h = " font-weight=\"bold\""
    } else {
        h = ""
    }
    ;

    if (r.checked==true) {
        r = " text-align=\"right\""
    } else{
        r = ""
   };



 ///--------table body creation--------
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


// ----------- on click Create button-----------
$("#create").click(function (){
    let x =$('#col').val();
    let y = $('#row').val()

    colList = [];
    for (let i =1; i<=x;i++){
        colList[i]= 20;
    };

    addFields(x);
    let details = create(x,y,colList);
$('textarea.text').val(details);

});


//-----------on Click Update button-----------
$("#update").click(function (){
    let x =$('#col').val();
    let y = $('#row').val()


    colList = [];
    for (let i =1; i<=x;i++){
        colList[i]= $('#colsize'+i).val();
    };

    let details = create(x,y,colList);
    $('textarea.text').val(details);

});