document.querySelector(".formulario").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    mensagem.style.fontWeight = "bold";

    // validação
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

    try {
        // verifica se email já existe
        const existe = await fetch(`http://localhost:3000/usuarios?email=${email}`);
        const dados = await existe.json();

        if (dados.length > 0) {
            mensagem.textContent = "Esse email já está cadastrado!";
            mensagem.style.color = "red";
            return;
        }

        // salva no db.json
        await fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                email,
                senha
            })
        });

        mensagem.textContent = `Cadastro realizado com sucesso, ${nome}!`;
        mensagem.style.color = "green";

        this.reset();

    } catch (error) {
        mensagem.textContent = "Erro ao salvar usuário!";
        mensagem.style.color = "red";
    }
});