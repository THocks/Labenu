let N1 = prompt('Digite um número')
let N2 = prompt ('Digite outro número')
let res

//O primeiro numero é maior que segundo? true
res = N1 > N2
console.log(res)
//O primeiro numero é igual ao segundo? false
res = N1 === N2
console.log(res)

//O primeiro numero é divisível pelo segundo? true
res = N1 > N2 / 2
console.log(res)
//O segundo numero é divisível pelo primeiro? true
res = N2 % N1 === 0
console.log(res)
