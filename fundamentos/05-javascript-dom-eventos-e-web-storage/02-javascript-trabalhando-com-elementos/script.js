// Exercicio 1
// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");


// Exercicio 2
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "green";

// Exercicio 3
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Vamo que vamo';

// Exercicio 4
// Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;

// Exercicio 5
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilhoCaminho2 = elementoOndeVoceEsta.previousElementSibling;

// Exercicio 6
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const text = elementoOndeVoceEsta.nextSibling;

// Exercicio 7
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// Exercicio 8
// Agora acesse o terceiroFilho a partir de pai.