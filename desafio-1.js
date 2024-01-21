// Criar uma função que exibe "Olá, mundo!" no console.
function helloWorld() {
    console.log('Olá, mundo!');
};

helloWorld();

// Esta função cria e exibe uma mensagem na tag h1
function titulo() {
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Desafio 1';
};

titulo();

// Ao carregar a página, uma mensagem de saudação aparecerá no console
function paragrafo() {
    let p = document.querySelector('p');
    p.innerHTML = 'Ao carregar a página, será exibida uma mensagem de boas-vindas no console.';
};

paragrafo();