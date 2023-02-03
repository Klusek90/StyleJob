document.getElementById('downloadXML').onclick = function (){

    let name = document.getElementById('filename').value;
    let string= document.getElementById('content').value;

    const blob = new Blob([string],{type:"octet-steam"})

    const href = URL.createObjectURL(blob)

    const a =Object.assign(document.createElement("a"), {
        href,
        style: "display:none",
        download: name+".xml",
    });
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(href)
    a.remove();
}