document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generate-btn");
    const copyBtn = document.getElementById("copy-btn");
    const passwordField = document.getElementById("password-field");

    const lengthInput = document.getElementById("length");
    const increaseBtn = document.getElementById("increase-btn");
    const decreaseBtn = document.getElementById("decrease-btn");
    const includeUppercase = document.getElementById("include-uppercase");
    const includeLowercase = document.getElementById("include-lowercase");
    const includeNumbers = document.getElementById("include-numbers");
    const includeSpecial = document.getElementById("include-special");
    const useRealWords = document.getElementById("use-real-words");

    // Lista de palavras reais
    const wordsList = [
        "casa", "cachorro", "carro", "livro", "mesa", "computador", "escola", "banana",
        "telefone", "cadeira", "janela", "porta", "sol", "luz", "chave", "agua", "fogo", "terra"
    ];

    // Função para gerar senha com palavras reais
    function generateRealWordsPassword(length) {
        let password = "";
        while (password.length < length) {
            let word = wordsList[Math.floor(Math.random() * wordsList.length)];
            password += word;
        }
        return password.slice(0, length);
    }

    // Função para gerar senha aleatória
    function generateRandomPassword() {
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
        return password;
    }

    // Função principal de geração de senha
    function generatePassword() {
        const length = parseInt(lengthInput.value);

        if (useRealWords.checked) {
            passwordField.value = generateRealWordsPassword(length);
        } else {
            passwordField.value = generateRandomPassword();
        }
    }

    // Evento para gerar senha ao clicar no botão
    generateBtn.addEventListener("click", generatePassword);

    // Evento para copiar senha ao clicar no botão
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
});
