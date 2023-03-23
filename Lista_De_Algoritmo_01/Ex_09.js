//09 – Elabore uma aplicação para calcular a área e o perímetro de um retângulo.
//Área = b x h
//Perímetro = é a soma de todos os lados
 
let lado1 = prompt('Digite o lado 1 do retângulo: ')
let lado2 = prompt('Digite o lado 2 do retângulo: ')
lado1 = parseInt(lado1)
lado2 = parseInt(lado2)

let area = lado1 * lado2
let perimetro = lado1 + lado1 + lado2 + lado2
area = parseInt(area)
perimetro = parseInt(perimetro)

console.log(`A área do retângulo é: ${area}, e o perímetro é: ${perimetro}`)
