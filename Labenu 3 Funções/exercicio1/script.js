//# Exercício 1

//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function nome() {
  let nomes = "thiago";
  console.log(`Olá ${nomes}`);
}
nome();

//b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.
function tabuada() {
  let tel = parseInt(document.getElementById("tela").value);
  let res = document.getElementById("res");
  let tabuada = "";
  for (let count = 1; count <= 10; count++) {
    tabuada += tel + "x" + count + " = " + tel * count + "<br>";

    res.innerHTML = tabuada;
  }
}

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__

/* Realizado ja no exercicio em cima */
