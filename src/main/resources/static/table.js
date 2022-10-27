function create(columnsNum, rowNum, solid, header) {

    let s;
    let h;

    if(solid==1){
        s=" border=\"solid\""
    }else{
        s=""
    };

    if(header==1){
        h=" font-weight=\"bold\""
    }else{
        h=""
    };




// creating row layout
    let columns = '\n\t\t<fo:table-column column-width=\"20mm\"/>';
    columns = columns.repeat(columnsNum);




    let rows= ""

    for(let i=1;i<=rowNum;i++){
        let rowBlock = '\n\t\t\t\t<fo:table-cell>' +
            '\n\t\t\t\t\t<fo:block'+h+'>' +
            '\n\t\t\t\t\t\t #Text' +
            '\n\t\t\t\t\t</fo:block>' +
            '\n\t\t\t\t</fo:table-cell>';
        h="";
       rows =rows +'\n\t\t\t<fo:table-row>'+ rowBlock;

        for(j=1;j<=(columnsNum-1);j++){
            rows+= rowBlock;
        }
        rows += '\n\t\t\t</fo:table-row>';

    }



//
//     rowBlock = rowBlock.repeat(columnsNum)
//
//
// //row layout
//     let rows = '\n\t\t\t<fo:table-row>' + rowBlock + '\n\t\t\t</fo:table-row>'
//     rows = rows.repeat(rowNum);
//
//


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
    $('.colsize').append('<span>Column '+x+' width in % </span><input type="text" id="colsize'+x+'"><br>');}
}


$("#create").click(function (){
    let x =$('#col').val();
    let y = $('#row').val()
    let s;
    let h


    let solid = document.getElementById("solid");
    let header =document.getElementById("sheaders");

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

    let details = create(x,y,s,h);
$('textarea.text').val(details);
addFields(x);

});