let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  if (!peso) {
    mgsResultado("Peso Invalido", false);
    return;
  }
  if (!altura) {
    mgsResultado("Altura Invalida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const mgs = `Seu IMC é ${imc} (${nivelImc})`;
  mgsResultado(mgs, true);
});

function getNivelImc(imc) {
  const nivel = [
    "MAGRESA",
    "NORMAL",
    "SOBREPESO",
    "OBESIDADE GRAU 1",
    "OBESIDADE GRAU 2",
    "OBESIDADE GRAU 3",
  ];

  if (imc >= 39.9) return nivel[4];
  if (imc >= 34.9) return nivel[3];
  if (imc >= 29.9) return nivel[2];
  if (imc >= 24.9) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;

  return imc.toFixed(2);
}

function criarH3() {
  const p = document.createElement("h3");
  return p;
}

function mgsResultado(mgs, isValid) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const p = criarH3();
  if (isValid) {
    p.classList.add("mgs-enviada");
  } else {
    p.classList.add("mgs-red");
  }

  p.innerHTML = mgs;
  resultado.appendChild(p);
}
