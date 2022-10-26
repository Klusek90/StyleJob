let columnsNum =2;
let rowNum=3;

let columns = '<br/>&emsp;&emsp;&lt;fo:table-column column-width=\"20mm\"/&gt;';
columns= columns.repeat(columnsNum);


let rows = '<br>&emsp;&emsp;&emsp;&lt;fo:table-row&gt;'+ '<br>&emsp;&emsp;&emsp;&lt;/fo:table-row&gt;'
rows =rows.repeat(rowNum);


let tab = '&lt;fo:block-container font-size=\"8.5pt\" border=\"solid\"&gt;'+
            '<br/>&ensp; &lt;fo:table&gt;'+
                columns+
                '<br/>&emsp; &lt;fo:body&gt;'+
                rows+
                '<br/>&emsp; &lt;/fo:body&gt;'+
            '<br/>&ensp;&lt;/fo:table&gt;'+
            '<br/> &lt;/fo:block-container&gt;';




$("#but").click(function (){
    $('#tabDisplay').html(tab);

});