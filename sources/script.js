let imgGrande;

function arrayAttivo() {
    let immag=[];
    for (let i = 1; i < document.querySelectorAll("img").length; i++) {
        immag[i]=document.getElementById(`im${i}`);
    }
    arrayRitratto=[immag[10], immag[6], immag[7], immag[8]];
    arrayPaesaggio=[immag[3], immag[12], immag[4], immag[5], immag[9]];
    arrayNatura=[immag[1], immag[2], immag[11]]; 
}

function overlay(idImmagine) {
    let imgOverlay=document.getElementById(idImmagine);
    if (imgGrande!=idImmagine) {
        document.getElementById("freccia_sx").innerHTML=`<button id="freccia1" onclick="passaImmagine(-1)"><<</button>`;    
        imgOverlay.style.display = "block";
        imgOverlay.style.width = "75%";
        imgOverlay.style.left = "12.5%";
        imgOverlay.style.position = "fixed";
        imgOverlay.style.background = "black";
        document.getElementById("freccia_dx").innerHTML=`<button id="freccia2" onclick="passaImmagine(+1)">>></button>`;
        if (imgGrande) {
            document.getElementById(imgGrande).style.display = "inline-block";
            document.getElementById(imgGrande).style.width = "250px";
            document.getElementById(imgGrande).style.position = "static";
        }

    } else {
        imgOverlay.style.display = "inline-block";
        imgOverlay.style.width = "250px";
        imgOverlay.style.position = "static";
        document.getElementById("freccia_sx").innerHTML=``;
        document.getElementById("freccia_dx").innerHTML=``;
    }   
    imgGrande=idImmagine;
}

function passaImmagine(y){
    const totale=12;
    let x=Number.parseInt(imgGrande.replace('im',''))+y;
    if (x>totale) x=1;
    if (x<1) x=totale; 
    let idImmagine=`im${x}`;
    overlay(idImmagine);
}

function tendinaFiltro(filtro){
    arrayPaesaggio.forEach(img => {
        if (filtro.includes("paesaggio")) img.style.display = "inline-block";
        else img.style.display = "none";
        
    });

    arrayRitratto.forEach(img => {
        if (filtro.includes("ritratto")) img.style.display = "inline-block";
        else img.style.display = "none";
    });

    arrayNatura.forEach(img => {
        if (filtro.includes("natura")) img.style.display = "inline-block";
        else img.style.display = "none";
    });
}
