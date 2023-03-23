// 06 – Cria uma aplicação que receba dois números e exibir as seguintes mensagens:
 //O números digitados foram ... e .... .
 //A soma dos números ... e ... é ... .
 //A subtração dos números ... e ... é ... .
 //A multiplicação dos números ... e ... é ... .
 //A divisão dos números ... e ... é ... .
 //A média dos números ... e ... é ... .

 let numero1 = prompt('')
let numero2 = prompt('')

numero1 = parseFloat(numero1) // conversão
numero2 = parseFloat(numero2)

let soma = numero1 + numero2
let sub = numero1 - numero1
let mult = numero1 * numero2
let div = numero1 / numero2
let mod = numero1 % numero2
let media = (numero1 + numero2) /2

document.write(`Os números digitados foram: ${numero1} e ${numero2}.<br>`)

document.write(`A soma dos números: ${numero1} e ${numero2} é ${soma}.<br>`)

document.write(`A soma dos números: ${numero1} e ${numero2} é ${numero1 + numero2}.<br>`)