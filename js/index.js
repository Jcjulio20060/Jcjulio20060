// Adicione quantas mensagens quiser
const text = ["Bem-vindo(a)!", "Prazer, Júlio César!"]; 
// Elemento onde o texto será digitado
const typingElement = document.getElementById("text-typing");
// Índice do caractere atual
let index = 0;
// Índice da mensagem atual
let textIndex = 0;

// Função para digitar o texto
function type() {
    // Verifica se ainda há caracteres para digitar
  if (index < text[textIndex].length) {
    // Adiciona o caractere atual ao elemento
    typingElement.innerHTML += text[textIndex].charAt(index);
    index++;
    setTimeout(type, 100); // Ajuste o tempo conforme necessário
  } else {
    setTimeout(() => {
        // Reseta o índice do caractere e passa para a próxima mensagem
        index = 0;
        textIndex++;
        if (textIndex < text.length) {
            typingElement.innerHTML = ""; // Limpa o texto antes de digitar a próxima mensagem
            type();
        } else {
            redirectToPortfolio(); // Redireciona para o portfólio após o efeito de máquina de escrever
        }
    }, 2000); // Tempo de espera antes de começar a próxima mensagem
  }
}

// Redireciona para o portfólio após o efeito de máquina de escrever
function redirectToPortfolio() {
    setTimeout(function () {
        window.location.href = "portfolio.html"; // Substitua pelo link real do seu portfólio
    }, 1000); // Tempo de espera após o efeito de máquina de escrever (1 segundo neste exemplo)
}

// Inicia a digitação
type();