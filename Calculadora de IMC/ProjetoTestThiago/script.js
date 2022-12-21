let inputTela1 = document.getElementById("tela1");
let inputTela2 = document.getElementById("tela2");
let resultado = document.getElementById("resultado");

function somar() {
  resultado.innerHTML = Number(inputTela1.value) + Number(inputTela2.value);
}
function subtrair() {
  resultado.innerHTML = Number(inputTela1.value) - Number(inputTela2.value);
}
function dividir() {
  resultado.innerHTML = Number(inputTela1.value) / Number(inputTela2.value);
}
function multiplicar() {
  resultado.innerHTML = Number(inputTela1.value) * Number(inputTela2.value);
}
