
$("#copybtn").click(function (){
    let highlight = $(".text")
    highlight.select();
    document.execCommand('copy');
})