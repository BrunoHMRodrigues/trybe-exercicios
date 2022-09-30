const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
// Exercicio 01
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// R: transform: translateY(-20px); se encontra no CSS para a classe tech

// Exercicio 02
// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function alterarPosicao (listaClicada) {
  const pegaTech = document.querySelector('.tech');
  pegaTech.classList.remove('tech');
  listaClicada.target.classList.add('tech');
}

firstLi.addEventListener("click", alterarPosicao);
secondLi.addEventListener("click", alterarPosicao);
thirdLi.addEventListener("click", alterarPosicao);
 
// Exercicio 03
// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
const inputText = document.getElementById("input");
inputText.addEventListener("input", alterarConteudoLista);

function alterarConteudoLista(event) {  
  const pegaTech = document.querySelector('.tech');
  pegaTech.innerText = event.target.value;
}

// Exercicio 04
// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
const spotrybefy = document.getElementById("my-spotrybefy");
spotrybefy.addEventListener("dblclick", abrirUrl);

function abrirUrl () {
    window.open("https://www.spotify.com/br/"); // Poderia usar: window.location.replace("https://www.spotify.com/br/")
}

// Exercicio 05
// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
spotrybefy.addEventListener("mouseover", )

// Exercicio 06
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.