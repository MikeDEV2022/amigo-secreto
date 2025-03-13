let lista_Teste = chamarLista()
function chamarLista(){
    let lista_Teste = [];
    return lista_Teste
}
function adicionar(){
    let lista = document.querySelector(".friends__container");
    let amigo = document.getElementById("nome-amigo").value;
    
    amigo = ` ${amigo}`
    lista_Teste.push(amigo)

    lista.innerHTML = `<p id="lista-amigos">${lista_Teste}</p>`
}

function reiniciar(){
    document.querySelector(".friends__container").innerHTML = `<p id="lista-amigos"></p>`
    document.getElementById("nome-amigo").value = ""
}