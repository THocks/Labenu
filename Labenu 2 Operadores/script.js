/* ### Parte 1
Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa: */




/*a) 5 é maior que 20 e também é menor que 2;
let N1 = 5
let N2 = 20
let res = 5 > 20 && 5 < 2

console.log(res)

//b) 5 é igual a 5 ou é igual a “5”;

res = 5 === 5 && 5 === "5"

console.log(res)

//c) negação de (vinte é maior que cinquenta)

res = (20 >! 50 )

console.log(res)

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta) 


res = ( 20 >! 50 && 50 >! 60)

console.log(res)
*/
 


/*### Parte 2

Na aula passada vocês começaram a implementar um sistema para o Rh de uma empresa. 

Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:**

**O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem: 

a) Auxílio creche por filho:  R$45,50


b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário */

Calcule:

//1) O salário fixo mais o auxílio creche
let saLario = 2000
let auXilo = 45.50

let res = ((45.50 * 2) + 2000)


//2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
let janEiro = 5.784
let res1 = 5.784 * 0.1

console.log(res1)



//3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)



//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

//5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  //( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

















/*const form = document.getElementById("form")
const username = document.getElementById("username")
const endereço = document.getElementById("endereço")
const CPF = document.getElementById("CPF")
const Escolaridade = document.getElementById("Escolaridade")
const CNH = document.getElementById("CNH")
const PossuiFilhos = document.getElementById("PossuiFilhos")
const CargoAtual = document.getElementById("CargoAtual")
const Salario = document.getElementById("Salario")
const AnoDeAdmissao = document.getElementById("AnoDeAdmissao")
let Btn = document.getElementById("btn") */