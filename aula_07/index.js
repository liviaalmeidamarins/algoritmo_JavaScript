let nome = document.getElementById('inputNome')
let idade = document.getElementById('inputIdade')
let btn = document.getElementById('Btn')
let div = document.getElementById('conteudo')

function escreve(){

    //console.log(nome)
    //console.log(idade)
    //console.log(btn)
    //console.log(div)
    //console.log(nome.value)
        div.innerHTML = `<h2>Nome: ${nome.value} - idade: ${idade.value}</h2>`

}

btn.addEventListener('click', escreve)

