console.log('¡JavaScript está funcionando!');

const btnGenerar = document.getElementById('generar-paleta');
const btn4 = document.getElementById('btn4');
const btn6 = document.getElementById('btn6');
const btn8 = document.getElementById('btn8');
const btn10 = document.getElementById('btn10');
const btnHSL = document.getElementById('btnHSL');
const btnHEX = document.getElementById('btnHEX');

function numeroRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}