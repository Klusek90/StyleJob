///--------table drawing creation--------
function drawTable() {
    let colNum = $('#col').val();
    let rowNum = $('#row').val()
    let draw = ''
    let cell = ''
    let cellHeight = 100 / rowNum
    let cellWidth = []
    let fontsize= 20

    let s = document.getElementById("solid");
    let h =document.getElementById("sheaders");
    let r = document.getElementById("align-right");
    let p = document.getElementById("padding-left");
    let padding_value = document.getElementById("padding-value").value;

    let solid
    let padding

    //cell width



    if (s.checked == true) {
        solid = ' border-style: solid;'
    } else {
        solid = ''
    }

    if (p.checked == true) {
        padding = ' padding-left:'+padding_value+'px;'
    } else {
        padding = ''
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
            cellWidth[j]=$('#colsize'+j).val()

            cell += '<div class="cell" style="font-size:'+fontsize+'px; width:'+cellWidth[j] +'%;height: 100%;'+ solid+ padding+ boldheader+ lastrow+'">Text'+i+'.'+j+'</div>'
        }

    draw+='<div class="inside-draw" style="height:'+ cellHeight+'%">'+cell+'</div>'
    cell=''
    }


    let made =  $(".table-draw").html(draw)

    return made
}
