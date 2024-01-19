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

function somarDoisNumeros(a, b) {
    return a + b;
};

function acionaSoma() {
    let num1 = parseFloat(prompt('Digite o primeiro número:'));
    let num2 = parseFloat(prompt('Digite o segundo número:'));

    let resultado = somarDoisNumeros(num1, num2);

    alert(`A soma entre ${num1} e ${num2} é ${resultado}`);
};
