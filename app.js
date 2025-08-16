//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;

    if (amigo == ''){
        alert('Por favor, insira um nome.');
    }else{
        amigos.push(amigo);
    }
    limparCampo();
    console.log('funciona');
    console.log(amigos.length);
    atualizaLista()
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}

function atualizaLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

