let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function consoleClicado() {
    console.log('O botão foi clicado');
}

function alerta() {
    alert('Eu amo JS');
};

function perguntarCidadeDoBrasil() {
    let cidadeDigitada = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidadeDigitada} e lembrei de você.`);
};

function somarDoisNumeros(num1, num2) {
    let num1 = parseInt(prompt('Digite o primeiro número.'));
    let num2 = parseInt(prompt('Digite o segundo número.'));
    let soma = num1 + num2;
    return soma;
}