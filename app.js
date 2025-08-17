//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
let indiceAleatorio = Math.floor(Math.random()*amigos.length)
 let lista = document.getElementById('listaAmigos');

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;

    if (amigo == ''){
        alert('Por favor, insira um nome.');
    }else{
        amigos.push(amigo);
    }
    limparCampo();
    atualizaLista()
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';

}

function atualizaLista(){
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigos.length!=0){
        let nomeSorteado = amigos[indiceAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto srorteado é: ${nomeSorteado}`;
        lista.innerHTML = ''
        amigos = []
    }else{
         alert('Por favor, faça um novo sorteio!')
    }
}