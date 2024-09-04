//Atividade realizada como desafio
const listaButtons = document.querySelectorAll('.dashboard__item__button');

function alterarStatus(n){
    if(!listaButtons[n - 1].classList.contains('dashboard__item__button--return')){
        listaButtons[n - 1].classList.add('dashboard__item__button--return')
        listaButtons[n - 1].innerHTML = 'Devolver'
    }else{
        listaButtons[n - 1].classList.remove('dashboard__item__button--return')
        listaButtons[n - 1].innerHTML = 'Alugar'
    }
    

}

