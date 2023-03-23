//05 – Crie uma aplicação que receba 5 números e exiba a soma com a seguinte frase:
//“Os números digitados foram ..., ..., ..., ... e sua soma é ... .

let valor1 = prompt('Digite o primeiro valor: ')
let valor2 = prompt('Digite o segundo valor: ')
let valor3 = prompt('Digite o terceiro valor: ')
let valor4 = prompt('Digite o quarto valor: ')
let valor5 = prompt('Digite o quinto valor: ')

valor1 = parseInt(valor1)
valor2 = parseInt(valor2)
valor3 = parseInt(valor3)
valor4 = parseInt(valor4)
valor5 = parseInt(valor5)

    console.log('Os números digitados foram: ' + valor1 +", "+ valor2 +", " + valor3 +", "  + valor4 +", "  + valor5)
    
    let soma = valor1 + valor2 + valor3 + valor4 + valor5

    console.log('A soma dos números são: ' + soma)