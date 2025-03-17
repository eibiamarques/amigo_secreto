
let listaAmigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if(!amigo){
        alert("Campo de preenchimento obrigatório!");
        return;
    }
    for(let i = 0; i < listaAmigos.length; i++){
        if(amigo === listaAmigos[i]){
            alert("O mesmo nome não pode ser inserido mais de uma vez! Diferencie com o sobrenome.");
            return;
        }
    }
    
    listaAmigos.push(amigo);
    exibirAmigos('#listaAmigos', `${listaAmigos.join(', ')}`);
    
    if(listaAmigos.length > 1){
        document.getElementById('sortearAmigo').disabled = false;
    }
    
    limparCampo();
}

    

function exibirAmigos() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        listaHTML.appendChild(item);
    }
}
function exibeSorteado(tag,texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
     }


function sortearAmigo(){
    let amigoSorteado = listaAmigos[Math.floor(Math.random()* listaAmigos.length)];
   

    exibeSorteado('#resultado',`O amigo sorteado é: ${amigoSorteado} `);
     document.getElementById('sortearAmigo').setAttribute('disabled', true);
     document.getElementById('novoSorteio').disabled = false;
     document.getElementById('button-add').setAttribute('disabled', true);
     document.getElementById('amigo').setAttribute('disabled', true);
}
function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}
function novoSorteio(){
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";
    exibeSorteado('#resultado','');
    limparCampo();
    document.getElementById('button-add').disabled = false;
    document.getElementById('amigo').disabled = false;
    document.getElementById('novoSorteio').setAttribute('disabled', true);
    listaAmigos = [];

}