console.log('¡JavaScript está funcionando!');

function generarColores(numColores) {
    const contenedor = document.getElementById("contenedor-colores");
    contenedor.innerHTML = "";
    for (let i = 0; i < numColores; i++) {
        const coloresRandom = generarHEX();
        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        colorBox.texto = coloresRandom;
        contenedor.appendChild(colorBox);}
        return generarColores
    };

