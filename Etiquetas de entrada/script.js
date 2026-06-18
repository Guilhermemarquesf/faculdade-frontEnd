document.querySelector(".formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    mensagem.style.fontWeight = "bold";

    if (nome === "" || email === "" || senha === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = `Cadastro realizado com sucesso, ${nome}!`;
    mensagem.style.color = "green";

    this.reset();
});