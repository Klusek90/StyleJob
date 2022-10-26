// let copyText = document.querySelector(".copy-text");
// copyText.querySelector("#copybtn").addEventListener("click", function (){
//     let input = copyText.querySelector("textarea.text");
//     input.select();
//     // document.execCommand("copy");
//     // copyText.classList.add("active");
//
// });

$("#copybtn").click(function (){
    let highlight = $(".text")
    highlight.select();
    document.execCommand('copy');
    // console.log(highlight);
    // highlight.select();
})