let idade = prompt("Qual sua idade")
let idadeAmigo = prompt("Qual a idade do seu amigo")

idade = Number(idade)
idadeAmigo = Number(idadeAmigo)

console.log("Sua idade é maior que a idade do seu amigo?", idade>idadeAmigo) 
console.log(idade - idadeAmigo)


let par = prompt("Diga um numero par")
par = Number(par)

console.log(par & 2) /* Em todas contas de divisão em numeros pares o unico numero que sobre é 0, e em contas de divisão com numeros impares sobre apenas o numero 1. */ 


let idade = prompt("Qual sua idade?")
idade = Number(idade)

console.log(idade * 12, "meses")
console.log(idade * 365, "dias")
console.log(idade * 365 * 24, "horas")



let numero1 = prompt("Escolha um numero")
let numero2 = prompt("Escolha um segundo numeoro")

numero1 = Number(numero1)
numero2 = Number(numero2)

console.log("Numero1 é maior que numero2", numero1>numero2)
console.log("Numero1 é igual a numero2?", numero1===numero2)

console.log("numero1 é divisivel por numero2?", numero1 % numero2 === 0)
console.log("numero2 é divisivel por numero1?", numero2 % numero1 === 0)