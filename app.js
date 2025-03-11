//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigo = [];
let resposta;

function adicionarAmigo() { //adiciona o nome do amigo na lista, mostrando na tela em forma de lista os nomes e depois limpando o campo de input
    resposta = document.querySelector('input').value; 

    if(resposta === '') {
        alert('Por favor, insira um nome.')
    } else {
        nomeAmigo.push(resposta);
    }

    console.log(nomeAmigo); //remover depois os consoles

    listarAmigos()
    limparCampo();
}

function limparCampo() {
    resposta = document.querySelector('input');
    resposta.value = '';
}

function listarAmigos() { //cria elementos de lista para cada nome adicionado

    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for(i = 0; i < nomeAmigo.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = nomeAmigo[i];
        lista.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (nomeAmigo !== '') { // 0 <= i < 1-----nomeAmigo.length
        let i = Math.floor(Math.random() * nomeAmigo.length);

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = nomeAmigo[i];
    }
}