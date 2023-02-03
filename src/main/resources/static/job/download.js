document.getElementById('downloadXML').onclick = function (){

    let name = document.getElementById('filename').value;
    let string= document.getElementById('content').value;

    let data = "data:text/xml;charset=utf-8" + encodeURIComponent(string);
    console.log(data);
    let anchor = document.createElement('a');
    anchor.setAttribute("href",data);
    anchor.setAttribute("download",name+".xml");
    anchor.click();
    anchor.remove();

}