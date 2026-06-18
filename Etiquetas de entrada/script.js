const botao = document.getElementById("button1");

botao.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem");

    if (nome === "") {
        mensagem.textContent = "Digite um nome!";
        return;
    }
    
    mensagem.textContent = `Bem-Vindo, ${nome}!`;
});
