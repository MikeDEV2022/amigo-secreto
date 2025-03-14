let lista_Teste = chamarLista();
let ativador = false

function chamarLista(){
    let lista_Teste = [];
    return lista_Teste;
}
function adicionar(){
    let lista = document.querySelector(".friends__container");
    let amigo = document.getElementById("nome-amigo").value;
    
    if(amigo == ""){
        alert("Adicione um nome de um amigo!")
    }else{
        amigo = ` ${amigo}`;
        if(lista_Teste.includes(amigo) || amigo == amigo.toUpperCase()){
            alert("Amigo já incluido ou invalido!")
        }else{
            lista_Teste.push(amigo);
            lista.innerHTML = `<p id="lista-amigos">${lista_Teste}</p>`;
        }
    }

}

function reiniciar(){
    document.querySelector(".friends__container").innerHTML = `<p id="lista-amigos"></p>`;
    document.querySelector(".prizeDraw__container").innerHTML = `<p id="lista-sorteio"></p>`
    document.getElementById("nome-amigo").value = "";
    lista_Teste = [];
    ativador = false
}

function sortear(){
    if(ativador == false){
        ativadorSorteio();
        embaralhamento();
        let container = document.querySelector(".prizeDraw__container");
        for(let i = 0; i < lista_Teste.length; i++){
            if(i == lista_Teste.length - 1){
                container.innerHTML += `<p id="lista-sorteio">${lista_Teste[i]} ➞ ${lista_Teste[0]}</p>`
            }else{
                container.innerHTML += `<p id="lista-sorteio">${lista_Teste[i]} ➞ ${lista_Teste[i + 1]}</p>`
            }
        }
    }else{
        alert("Reinicie o jogo para sortear novos nomes!")
    }
}

function embaralhamento(){
    for(let indice = lista_Teste.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista_Teste[indice - 1], lista_Teste[indiceAleatorio]] = [lista_Teste[indiceAleatorio], lista_Teste[indice - 1]];
    }
    
}
function ativadorSorteio(){
    ativador = true
}