//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista(); 
        inputNome.value = '';
    } else if (!nome) {
        alert('Por favor, insira um nome válido!');
    } else {
        alert('Este nome já foi adicionado!');
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length < 2) { 
        alert('Por favor, adicione pelo menos 2 amigos!');
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(nome) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    const li = document.createElement('li');
    li.textContent = (`O amigo secreto sorteado ${nome}`);
    resultado.appendChild(li);
}