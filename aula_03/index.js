let nome = prompt ("Digite seu nome: ") // entrada
let idade = prompt ("Digite sua idade: ") // entrada
let idade2 = prompt ("Digite outra idade: ") // entrada 

alert(`Nome: ${nome} - idade: ${idade}`)
console.log(`Nome: ${nome} - idade: ${idade}`)
document.write(`Nome: ${nome} - idade: ${idade}`)

//--------------------

console.log(typeof nome)
console.log(typeof idade)

//parseInt - converte para inteiro
// parseFloat - converte para número real (double)

idade = parseInt(idade)
idade2 = parseInt(idade2)

console.log(idade + idade2)


