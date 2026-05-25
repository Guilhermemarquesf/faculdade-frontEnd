const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.textContent = "Light";
    } else {
        btn.textContent = "Dark";
    }
});





