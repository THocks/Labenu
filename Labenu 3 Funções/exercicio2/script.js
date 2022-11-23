// Declare e chame as funções abaixo:

//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

/*function calcular(num1, num2) {
  num1 = Number(prompt("Digite um número"));
  num2 = Number(prompt("Digite outro número"));

  res = num1 + num2;

  console.log(res);
}
calcular(); */

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

/*function calcular(num1, num2) {
  num1 = Number(prompt("Digite um número"));
  num2 = Number(prompt("Digite um número"));
  let res1 = " Esse número  digitado no campo 1 maior que no campo 2 True";
  let res2 =
    "O Número digitado no campo 2 maior que o número digitado no campo 1 False";
  let res3 = "Os números digitados nos campos são iguais";

  if (num1 > num2) {
    console.log(res1);
  } else {
    num1 < num2;
    console.log(res2);
  }
  if (num1 === num2) {
    console.log(res3);
  }
}
calcular();

//c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

function Verificar(num1) {
  num1 = parseInt(prompt("Digite um número"));

  let res = num1 % 2 == 0 ? "Par" : "Impar";
  console.log(res + ":", num1);
}
Verificar();
*/
//
//d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.

function salario(valorRecebido) {
  valorRecebido = Number(prompt("Qual foi seu ultimo salário recebido ?"));
  let desConto = 0.1;
  let descontoSalarial = valorRecebido * desConto;
  let ValorRecebidoAtualizado = valorRecebido - descontoSalarial;
  console.log(ValorRecebidoAtualizado);
}
salario();
