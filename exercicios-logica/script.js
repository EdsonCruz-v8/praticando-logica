
function verificar(){
    const numero = parseInt(document.getElementById('input_num').value)
    numero % 2 == 0 ? exibirMensagem('#span_resposta_inteiro', 'Este é um numero par!') : exibirMensagem('#span_resposta_inteiro', 'este é um numero impar!');
}

function exibirMensagem(tag, mensagem){
    const element = document.querySelector(tag)
    element.textContent = mensagem;
}

//Resolução atividade número 2
function verificarMaior(){
    const num1 = Number(document.getElementById('input_num_1').value);
    const num2 = Number(document.getElementById('input_num_2').value)

    exibirMensagem('#span_maior_numero', `Dentre os dois, o numero ${Math.max(num1, num2)} é o maior número`);
}

//Resolução atividade 3
function verificarIdade(){
    const idade = parseInt(document.getElementById('input_idade').value)

    idade >= 18 ? exibirMensagem('#span_idade', 'Você é maior de idade') :
    exibirMensagem('#span_idade', 'você é menor de idade')
}

//Resolução atividade 4
function verificarEscala(){
    const nota = Number(document.getElementById('input_nota').value);
    let escala = 'F';

    if(nota >= 90){
        escala = 'A'
    }else if(nota >= 80 && nota <= 89){
        escala = 'B'
    }else if(nota >= 70 && nota <= 79){
        escala = 'C'
    }else if(nota >= 60 && nota <= 69){
        escala = 'D'
    }

    exibirMensagem('#span_escala_nota', `Sua escala é: ${escala}`)
}

//Resolução atividade 5
function verificarIntervalo(){
    const numero = Number(document.getElementById('input_num_intervalo').value)

    numero >= 10 && numero <= 20 ? exibirMensagem('#span_intervalo', 'Este número está dentro do intervalo')
     : exibirMensagem('#span_intervalo', 'Este número não está dentro do intervalo');
}

function aprovarAluno(){
    const nota = Number(document.getElementById('input_nota_aprovacao').value);

    nota >= 60 ? exibirMensagem('#span_aprovar', 'Aluno Aprovado!') 
    : exibirMensagem('#span_aprovar', 'Aluno reprovado!')
}

function verificarBissexto(){
    const ano = parseInt(document.getElementById('input_ano').value);

    if(ano % 4 == 0){
        if(ano % 100 == 0){
            if(ano % 400 == 0){
                exibirMensagem('#span_ano', 'Ano bissexto!')
            }else{
                exibirMensagem('#span_ano', 'Esse ano não é bissexto!')
            }
        }else{
            exibirMensagem('#span_ano', 'Ano bissexto!')
        }
    }else{
        exibirMensagem('#span_ano', 'Esse ano não é bissexto!');
    }
}

function calcularDesconto(){
    const valor = Number(document.getElementById('input_valor_compra').value);

    valor > 100 ? exibirMensagem('#span_desconto', `O valor final da sua compra é de: ${valor - valor * 0.1}`)
    : exibirMensagem('#span_desconto', `Você não tem desconto, o valor final é de ${valor}`);
}

function verificarMulta(){
    const velocidadeCarro = Number(document.getElementById('input_velocidade').value);

    velocidadeCarro > 60 ? exibirMensagem('#span_multa', 'Você foi multado!')
    : exibirMensagem('#span_multa', 'Você está dentro do limite de velocidade');
}


