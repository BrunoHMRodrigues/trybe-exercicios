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
const terceiroFilhoCaminho2 = pai.lastElementChild.previousElementSibling;


// Exercicio Foguetinho 02 - Criando Elementos
// Exercicio 01
// Crie um irmão para elementoOndeVoceEsta.
const irmaoElementoOndeVoceEsta = document.createElement("section");
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmaoElementoOndeVoceEsta);

// Exercicio 02
// Crie um filho para elementoOndeVoceEsta.
const filhoElementoOndeVoceEsta = document.createElement("section");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// Exercicio 03
// Crie um filho para primeiroFilhoDoFilho.
const filhoPrimeiroFilhoDoFilho = document.createElement("section");
filhoPrimeiroFilhoDoFilho.id = "filhoPrimeiroFilhoDoFilho";
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// Exercicio 04
// A partir desse filho criado, acesse terceiroFilho.