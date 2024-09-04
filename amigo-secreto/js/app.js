//Atividade realizada como desafio
const listaAmigos = []

function adicionar(){
    const nomeAmigo =  document.getElementById('nome-amigo').value.toLowerCase();
    const input = document.getElementById('nome-amigo');

    if(!nomeAmigo || listaAmigos.includes(nomeAmigo)){
        alert("Nome invalido ou já cadastrado!")
        return
    }

    input.value = ''
    input.innerHTML = ''

    listaAmigos.push(nomeAmigo)
    exibirListaSelecionados();
}

function exibirListaSelecionados(){
    const lista = document.getElementById('lista-amigos')

    lista.innerHTML = listaAmigos
}

function sortear(){
    const listaComprar = []
    const listaReceber = []

    if(listaAmigos.length < 4){
        alert("Insira mais amigos para participar");
        return
    }


    for(let i = 0; i < listaAmigos.length; i++){

        let indiceC = Math.floor(Math.random() * listaAmigos.length)

        while(listaComprar.includes(listaAmigos[indiceC])){
            indiceC = Math.floor(Math.random() * listaAmigos.length)
        }

        listaComprar.push(listaAmigos[indiceC]);

        let indiceR = Math.floor(Math.random() * listaAmigos.length)

        while(indiceR == indiceC){
            indiceR = Math.floor(Math.random() * listaAmigos.length)
        }

        while(listaReceber.includes(listaAmigos[indiceR])){
            indiceR = Math.floor(Math.random() * listaAmigos.length)
        }

        listaReceber.push(listaAmigos[indiceR])


    }
        
    exibirListaSorteio(listaAmigos.length, listaComprar, listaReceber);
}

function exibirListaSorteio(tamanho,comprar, receber){
    const listaSorteio = document.getElementById('lista-sorteio');

    listaSorteio.innerHTML = ""

    for(let i = 0; i < tamanho; i++){
        listaSorteio.innerHTML += `<a onclick="remover(${i})">${comprar[i]}-->${receber[i]}<a><br>` 
    }
}

function reiniciar(){
    const listaSelecionados = document.getElementById('lista-amigos');
    const listaSorteio = document.getElementById('lista-sorteio');
    
    listaSelecionados.innerHTML = '';
    listaSorteio.innerHTML = '';
    

    listaAmigos = [];
    
}

function remover(index){
    listaAmigos.splice(index, 1);

    sortear()
}

const listaNumeros = []
function numeroAleatorio(){


    let numero =  Math.floor(Math.random() * 100);
    console.log(numero)

    while(listaNumeros.includes(numero)){
        numero = Math.floor(Math.random * 100);
    }

    listaNumeros.push(numero);
    console.log(listaNumeros)
}

for(let i = 0; i < 100; i++){
    numeroAleatorio();

}
