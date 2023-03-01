///--------table drawing creation--------
function drawTable() {
    let colNum = $('#col').val();
    let rowNum = $('#row').val()
    let draw = ''
    let cell = ''
    let cellHeight = 100 / rowNum
    let cellWidth = 100 / colNum
    let fontsize= 20

    let s = document.getElementById("solid");
    let h =document.getElementById("sheaders");
    let r = document.getElementById("align-right");

    let solid


    if (s.checked == true) {
        solid = ' border-style: solid; padding-left: 4px;'
    } else {
        solid = ''
    }

    fontsize = fontsize -rowNum;

    for (let i=1; i<=(rowNum); i++){
        for (let j=1; j<=(colNum);j++){

            let boldheader
            if (h.checked == true && i==1){
                boldheader = ' font-weight: bold;'
            }else {
                boldheader =''
            }


            let lastrow
            if (r.checked == true && j== colNum){
                lastrow = ' text-align: right;'
            }else {
                lastrow =''
            }


            cell += '<div class="cell" style="font-size:'+fontsize+'px; width:'+cellWidth +'%;height: 100%;'+ solid+ boldheader+ lastrow+'">Text'+i+'.'+j+'</div>'
        }

    draw+='<div class="inside-draw" style="height:'+ cellHeight+'%">'+cell+'</div>'
    cell=''
    }


    let made =  $(".table-draw").html(draw)

    return made
}
