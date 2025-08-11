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
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}
