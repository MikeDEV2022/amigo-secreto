let lista_Teste = chamarLista();

function chamarLista(){
    let lista_Teste = [];
    return lista_Teste;
}
function adicionar(){
    let lista = document.querySelector(".friends__container");
    let amigo = document.getElementById("nome-amigo").value;
    
    amigo = ` ${amigo}`;
    lista_Teste.push(amigo);

    lista.innerHTML = `<p id="lista-amigos">${lista_Teste}</p>`;
}

function reiniciar(){
    document.querySelector(".friends__container").innerHTML = `<p id="lista-amigos"></p>`;
    document.querySelector(".prizeDraw__container").innerHTML = `<p id="lista-sorteio"></p>`
    document.getElementById("nome-amigo").value = "";
    lista_Teste = [];
}

function sortear(){
    chamaSorteador();
}

function chamaSorteador(){
    for(let indice = lista_Teste.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista_Teste[indice - 1], lista_Teste[indiceAleatorio]] = [lista_Teste[indiceAleatorio], lista_Teste[indice - 1]];
    }
}