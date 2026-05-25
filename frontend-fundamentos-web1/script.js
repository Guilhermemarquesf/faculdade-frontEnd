// Boas vindas ao abir o site  
alert ("Olá, bem-vindo ao meu projeto web!");

//Mudança na cor de fundo do site 
const btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.textContent = "modo claro";
    } else {
        btn.textContent = "modo escuro";
    }
});