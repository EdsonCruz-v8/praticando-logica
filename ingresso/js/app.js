//Atividade realizada como desafio
let qtdInferior = 400
let qtdSuperior = 200
let qtdPista = 100

function comprar(){
    console.log(qtdPista)
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    const qtd = parseInt(document.getElementById('qtd').value)
    let idShow = "qtd-pista"
    let valueToShow = qtdPista;

    if(tipoIngresso == "inferior"){

        if(qtdInferior < qtd){
            alert("Sem ingressos disponivéis")
        }else{
            qtdInferior -= qtd;
            idShow = "qtd-inferior"
            valueToShow = qtdInferior
        }


    }
    if(tipoIngresso == "superior"){

        if(qtdSuperior < qtd){
            alert("Sem ingressos disponivéis")
        }else{
            qtdSuperior -= qtd
            idShow = "qtd-superior"
            valueToShow = qtdSuperior
        }

    }
    if(tipoIngresso == "pista"){

        if(qtdPista < qtd){
            alert("Sem ingressos disponivéis")
        }else{
            qtdPista -= qtd
        }
    }

    const labelShow = document.getElementById(idShow);
    labelShow.innerHTML = valueToShow

}