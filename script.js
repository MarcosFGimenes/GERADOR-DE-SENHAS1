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

    // Função para gerar senha com palavras reais e incluir caracteres especiais, números e letras maiúsculas
    function generateRealWordsPassword(length) {
        let password = "";
        let wordsUsed = [];

        // Constrói a lista de caracteres adicionais
        let characters = "";
        if (includeUppercase.checked) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase.checked) characters += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers.checked) characters += "0123456789";
        if (includeSpecial.checked) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

        // Adiciona palavras até atingir o comprimento desejado
        while (password.length < length) {
            let word = wordsList[Math.floor(Math.random() * wordsList.length)];
            wordsUsed.push(word);
            password += word;
        }

        // Ajusta a senha ao comprimento desejado
        password = password.slice(0, length);

        // Converte letras para maiúsculas aleatoriamente e insere caracteres extras conforme opções selecionadas
        let finalPassword = password.split("");

        for (let i = 0; i < finalPassword.length; i++) {
            // Altera para maiúsculas aleatoriamente, se a opção estiver ativada
            if (includeUppercase.checked && Math.random() < 0.3) {
                finalPassword[i] = finalPassword[i].toUpperCase();
            }
            // Insere caracteres especiais ou números em posições aleatórias
            if (characters && Math.random() < 0.2) {
                finalPassword[i] = characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }

        return finalPassword.join("");
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

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão e o overlay
    const terrorButton = document.getElementById('terror-button');
    const terrorOverlay = document.getElementById('terror-overlay');

    // Adiciona evento de clique no botão "TERROR"
    terrorButton.addEventListener('click', function() {
        // Exibe o overlay de terror
        terrorOverlay.style.display = 'flex';
    });
});
