console.log('¡JavaScript está funcionando!');

const btnGenerar = document.getElementById('generar-paleta');
const btn6 = document.getElementById('btn6');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnHSL = document.getElementById('btnHSL');
const btnHEX = document.getElementById('btnHEX');
let tamañoPaleta;
let formatoColor = 'HSL';
let paletaColores = [];
let contenedorColores = document.getElementById('paleta-colores');

function numeroRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarHEXcolor () {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[numeroRandom(0, letras.length - 1)];
    }
    return color;
}

function generarHSLcolor () {
    const h = numeroRandom(0, 360);
    const s = numeroRandom(0, 100);
    const l = numeroRandom(0, 100);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function boton6 () {
    tamañoPaleta = 6;
    console.log('Se seleccionaron 6 colores');
}
btn6.addEventListener('click', boton6);

function boton8 () {
    tamañoPaleta = 8;
    console.log('Se seleccionaron 8 colores');
}
btn8.addEventListener('click', boton8);

function boton9 () {
    tamañoPaleta = 9;
    console.log('Se seleccionaron 10 colores');
}
btn10.addEventListener('click', boton10);

function botonHSL () {
    formatoColor = 'HSL';
    console.log('Se seleccionó formato HSL');
    mostrarPaleta();
}
btnHSL.addEventListener('click', botonHSL);

function botonHEX () {
    formatoColor = 'HEX';
    console.log('Se seleccionó formato HEX');
    mostrarPaleta();
}
btnHEX.addEventListener('click', botonHEX);

function mostrarPaleta () {
    contenedorColores.innerHTML = '';
    for (let i = 0; i < tamañoPaleta; i++) {
        const colorBox = document.createElement('div');
        const colores = paletaColores[i];
        if (formatoColor === 'HEX') {
            colorBox.textContent = convertirHSLaHEX(colores);
        } else {
            colorBox.textContent = colores;
        }
        colorBox.className = 'color-card color-box';
        colorBox.style.color = obtenerColorFuente(colores);
        colorBox.style.backgroundColor = colores;
        contenedorColores.appendChild(colorBox);
    }
}

btnGenerar.addEventListener('click', function() {
    paletaColores = [];
    for (let i = 0; i < tamañoPaleta; i++) {
        paletaColores.push(generarHSLcolor());
    }
    mostrarPaleta();
});

function convertirHSLaHEX (hsl) {
    const hslValues = hsl.match(/\d+/g).map(Number);
    const h = hslValues[0];
    const s = hslValues[1] / 100;
    const l = hslValues[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function obtenerColorFuente (colorPaleta) {
    let partes = colorPaleta.replace("hsl(", "").replace(")", "").replaceAll("%", "").split(",");
    let valorLuz = parseInt(partes[2]);
    let colorFuente = (valorLuz > 50) ? 'black' : 'white';
    console.log('color de paleta -> '+colorPaleta+" -> color de fuente -> "+colorFuente+" -> Luminosidad -> " + valorLuz);
    return colorFuente;
}
