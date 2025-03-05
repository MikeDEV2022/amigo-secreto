function adicionar(){
    let amigo = document.getElementById("nome-amigo").value;
    let lista_Amigos = document.querySelector(".friends__container");
    let createElement = document.createElement("p");

    amigosArmazenados(amigo,lista_Amigos,createElement)
    
}
function amigosArmazenados(amigo,lista_amigos,createElement){
    createElement.innerHTML = `<p id="lista-amigos">${amigo}</p`
    lista_amigos.append(createElement);
}