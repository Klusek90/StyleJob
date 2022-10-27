function create(columnsNum, rowNum) {
// creating row layout
    let columns = '\n\t\t<fo:table-column column-width=\"20mm\"/>';
    columns = columns.repeat(columnsNum);

    let rowBlock = '\n\t\t\t\t<fo:table-cell>' +
        '\n\t\t\t\t\t<fo:block>' +
        '\n\t\t\t\t\t\t #Text' +
        '\n\t\t\t\t\t</fo:block>' +
        '\n\t\t\t\t</fo:table-cell>'

    rowBlock = rowBlock.repeat(columnsNum)


//row layout
    let rows = '\n\t\t\t<fo:table-row>' + rowBlock + '\n\t\t\t</fo:table-row>'
    rows = rows.repeat(rowNum);


    let tab = '<fo:block-container font-size=\"8.5pt\" border=\"solid\">' +
        '\n\t<fo:table>' +
        columns +
        '\n\t\t<fo:body>' +
        rows +
        '\n\t\t</fo:body>' +
        '\n\t</fo:table>' +
        '\n</fo:block-container>';

return tab;
}

function addFields(){
    $('.main').append('<input type="text" class="colsize"><br>');
}


$("#create").click(function (){
    let x =$('#col').val();
    let y = $('#row').val()
    let sum = create(x,y);
$('textarea.text').val(sum);
console.log("pl");

});