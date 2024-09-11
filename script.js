document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const generateBtn = document.getElementById("generate-btn");
    const copyBtn = document.getElementById("copy-btn");
    const passwordField = document.getElementById("password-field");

    // Função para gerar uma senha aleatória
    function generatePassword() {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // Gera a senha e insere no campo de texto
    generateBtn.addEventListener("click", function () {
        const password = generatePassword();
        passwordField.value = password;
    });

    // Copia a senha gerada para a área de transferência
    copyBtn.addEventListener("click", function () {
        if (passwordField.value) {
            passwordField.select();
            document.execCommand("copy");
            alert("Senha copiada para a área de transferência!");
        } else {
            alert("Nenhuma senha gerada para copiar!");
        }
    });

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
