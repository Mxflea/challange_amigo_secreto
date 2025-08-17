//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
let lista = document.getElementById('listaAmigos')
let resultado = document.getElementById('resultado');

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;

    if (amigo === ''){
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

function limparLista(){
    lista.innerHTML = '';
}

function atualizaLista(){
    limparLista()

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function gerarAmigoSorteado(){
    let indiceAleatorio = Math.floor(Math.random()*amigos.length)
    let nomeSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `O amigo secreto srorteado é: ${nomeSorteado}`
}

function sortearAmigo(){
    if (amigos.length!=0){
        gerarAmigoSorteado()
        limparLista()
        amigos = []
    }else{
        alert('Por favor, insira um nome.')
        resultado.innerHTML = ''
    }
}