const inputName = document.getElementById("nome")

const botao = document.getElementById("botao")

const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", function (){
    const nome = imputNome.value;

    if (nome == "") {
        mensagem.textContent = "Digite um nome!";
        return
    }


    mensagem.textContent = `Bem-Vindo, ${nome}!`;
});
