// Exercicio 1
// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById("primeiroFilho").nextElementSibling;


// Exercicio 2
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "blue";

// Exercicio 3
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild
primeiroFilhoDoFilho.innertext = "Vamo que Vamo!";

// Exercicio 4
// Acesse o primeiroFilho a partir de pai.

// Exercicio 5
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

// Exercicio 6
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

// Exercicio 7
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

// Exercicio 8
// Agora acesse o terceiroFilho a partir de pai.