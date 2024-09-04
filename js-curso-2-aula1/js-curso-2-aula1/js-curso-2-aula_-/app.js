let titulo = document.querySelector('h1');
titulo.innerHTML = "Jogo do numero secreto"

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Escolha um numero entre 0 e 10"

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextonaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto 

}

exibirTextonaTela('h1', "Jogo do número secreto");
exibirTextonaTela('p', "Escolha um número entre 1 e 100")

 function verificarChute(){
    const numeroChute = parseInt(document.querySelector('.container__input').value)
    
    numeroChute == numeroSecreto ? exibirTextonaTela('p', 'Você acertou!!!') :
    exibirTextonaTela('p',"Erroooooou!!!")
 }

 function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1)
 }