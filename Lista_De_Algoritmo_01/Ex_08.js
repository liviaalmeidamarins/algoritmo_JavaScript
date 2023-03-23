//08 – Crie uma aplicação para calcular a área e o perímetro de um quadrado.
//Área = lado * lado
//Perímetro = é a soma de todos os lados

let lado = prompt('Digite o valor do lado do quadrado: ')
lado = parseInt(lado)

let area = lado * lado
let perimetro = lado + lado + lado + lado
area = parseInt(area)
perimetro = parseInt(perimetro)

console.log(`A area do quadrado é: ${area}, o perimetro do quadrado é ${perimetro}`)
