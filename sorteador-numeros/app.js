const listaSorteados = [];

function sortear(){
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value); 

   
    // alert(`Quantidade: ${quantidade}`);
    // alert(`De: ${de}`);
    // alert(`Até: ${ate}`);

    for(let i = 0; i < quantidade; i++){
        let numero = obterNumeroAleatorio(de, ate);    

        while(listaSorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        listaSorteados.push(numero);
    }

    exibirLista();

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function exibirLista(){
    const resultado = document.getElementById('label_resultado');
    

    for(let i = 0; i < listaSorteados.lenght; i++){
        resultado.innerHTML += listaSorteados[i];
        
    }

}