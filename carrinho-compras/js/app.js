//Atividade realizada como desafio
const fone = {
    nome : "Fone de Ouvido",
    preco : 100,
    quantidade: 0
}
const celular = {
    nome : "Celular",
    preco : 1400,
    quantidade : 0,
}
const oculos = {
    nome: "Oculos VR",
    preco: 5000,
    quantidade : 0
}

let listaSelecionados = []


function adicionar(){
    const produtoSelecionado = document.getElementById('produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);

    

    if(produtoSelecionado == "Fone de ouvido - R$100"){
        fone.quantidade += quantidade > 1 ? quantidade : 1

        if(!listaSelecionados.includes(fone)){
            listaSelecionados.push(fone)    
        }else{
            listaSelecionados[listaSelecionados.indexOf(fone)] = fone;
        }
        
    }

    if(produtoSelecionado == "Celular - R$1400"){
        celular.quantidade += quantidade > 1 ? quantidade : 1;

        if(!listaSelecionados.includes(celular)){
            listaSelecionados.push(celular)
        }else{
            listaSelecionados[listaSelecionados.indexOf(celular)] = celular;
        }
    }

    if(produtoSelecionado == "Oculus VR - R$5000"){
        oculos.quantidade += quantidade > 1 ? quantidade : 1

        if(!listaSelecionados.includes(oculos)){
            listaSelecionados.push(oculos)
        }else{
            listaSelecionados[listaSelecionados.indexOf(oculos)] = oculos;
        }
    }

    listarProdutos();
}

let total = 0;
function listarProdutos(){
    const viewProdutos = document.getElementById('lista-produtos');
    viewProdutos.innerHTML = ''
    const valorTotal = document.getElementById('valor-total')

    total = 0;
    listaSelecionados.forEach(produto =>{
        console.log("Aqui é o produto", produto)
        viewProdutos.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${produto.quantidade}x</span>${produto.nome}<span class="texto-azul">R$${produto.preco}</span>
        </section>`

        total += produto.preco * produto.quantidade
    })

    valorTotal.innerHTML = `R$${total}` 


}

function limpar(){
    const viewProdutos = document.getElementById('lista-produtos');
    const valorTotal = document.getElementById('valor-total')
    viewProdutos.innerHTML = ''
    valorTotal.innerHTML = ''

    listaSelecionados = [];
    total = 0;
}