console.log('¡JavaScript está funcionando!');

const btnGenerar = document.getElementById('generar-paleta');
const btn4 = document.getElementById('btn4');
const btn6 = document.getElementById('btn6');
const btn8 = document.getElementById('btn8');
const btn10 = document.getElementById('btn10');
const btnHSL = document.getElementById('btnHSL');
const btnHEX = document.getElementById('btnHEX');
let tamañoPaleta;
let formatoColor = 'HSL';

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

function boton4 () {
    tamañoPaleta = 4;
    console.log('Se seleccionaron 4 colores');
}
btn4.addEventListener('click', boton4);

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

function boton10 () {
    tamañoPaleta = 10;
    console.log('Se seleccionaron 10 colores');
}
btn10.addEventListener('click', boton10);

function botonHSL () {
    formatoColor = 'HSL';
    console.log('Se seleccionó formato HSL');
}
btnHSL.addEventListener('click', botonHSL);

function botonHEX () {
    formatoColor = 'HEX';
    console.log('Se seleccionó formato HEX');
}
btnHEX.addEventListener('click', botonHEX);