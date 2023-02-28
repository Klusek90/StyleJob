///--------table drawing creation--------
function drawTable(){
    let colNum =$('#col').val();
    let rowNum = $('#row').val()
    let draw=''
    let cell=''
    let cellHeight = 100 / rowNum
    let cellWidth = 100/ colNum



    for (let i=1; i<=(rowNum); i++){
        for (let j=1; j<=(colNum);j++){
            cell += '<div class="cell" style="width:'+cellWidth +'%">Text'+i+'.'+j+'</div>'
        }

    draw+='<div class="inside-draw" style="height:'+ cellHeight+'%">'+cell+'</div>'
    cell=''
    }


    let made =  $(".table-draw").html(draw)

    return made
}
