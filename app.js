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