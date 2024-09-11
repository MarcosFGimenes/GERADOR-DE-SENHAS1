document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const generateBtn = document.getElementById("generate-btn");
    const copyBtn = document.getElementById("copy-btn");
    const passwordField = document.getElementById("password-field");

    // Personalização
    const lengthInput = document.getElementById("length");
    const increaseBtn = document.getElementById("increase-btn");
    const decreaseBtn = document.getElementById("decrease-btn");
    const includeUppercase = document.getElementById("include-uppercase");
    const includeLowercase = document.getElementById("include-lowercase");
    const includeNumbers = document.getElementById("include-numbers");
    const includeSpecial = document.getElementById("include-special");

    // Função para gerar senha aleatória
    function generatePassword() {
        const length = parseInt(lengthInput.value);
        let characters = "";
        if (includeUppercase.checked) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase.checked) characters += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers.checked) characters += "0123456789";
        if (includeSpecial.checked) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        passwordField.value = password;
    }

    // Gerar senha ao clicar no botão
    generateBtn.addEventListener("click", generatePassword);

    // Copiar senha ao clicar no botão
    copyBtn.addEventListener("click", function () {
        passwordField.select();
        document.execCommand("copy");
    });

    // Aumentar e diminuir o valor da quantidade de caracteres
    increaseBtn.addEventListener("click", function () {
        if (lengthInput.value < 20) lengthInput.value = parseInt(lengthInput.value) + 1;
    });

    decreaseBtn.addEventListener("click", function () {
        if (lengthInput.value > 4) lengthInput.value = parseInt(lengthInput.value) - 1;
    });

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
