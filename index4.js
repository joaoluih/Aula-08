let numero1 = prompt("Escolha um numero")
let numero2 = prompt("Escolha um segundo numeoro")

numero1 = Number(numero1)
numero2 = Number(numero2)

console.log("Numero1 é maior que numero2", numero1>numero2)
console.log("Numero1 é igual a numero2?", numero1===numero2)

console.log("numero1 é divisivel por numero2?", numero1 % numero2 === 0)
console.log("numero2 é divisivel por numero1?", numero2 % numero1 === 0)