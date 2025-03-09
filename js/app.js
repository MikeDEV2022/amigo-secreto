let vet = [];
function adicionar(){
    let amigo = document.getElementById("nome-amigo").value;
    let lista_Amigos = document.querySelector(".friends__container");

    vet.push(amigo);

    lista_Amigos.innerHTML += `<p id="lista-amigos">${vet}</p>`
    
}