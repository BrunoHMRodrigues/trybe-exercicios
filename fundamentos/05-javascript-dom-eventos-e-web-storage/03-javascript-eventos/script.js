function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// PARTE 01
//Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
//A tag <ul> deve conter o id 'days'
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ul = document.getElementById("days");

function povoarCalendario () {

  for (let index = 0; index < decemberDaysList.length; index+=1) {
    let li = document.createElement("li");
    let dayCalendar = decemberDaysList[index];
    
    li.className = "day";
    li.innerText = dayCalendar;
    if (dayCalendar === 24 || dayCalendar === 25 || dayCalendar === 31) {
      li.classList.add("holyday");        
    }
    if (dayCalendar === 4 || dayCalendar === 11 || dayCalendar === 18 || dayCalendar === 25) {
      li.classList.add("friday");
    }
        
    ul.appendChild(li);    
  }
}

povoarCalendario();



// PARTE 02
//Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
const buttonContainer = document.querySelector("div.buttons-container");

function criaBotao() {
  const button = document.createElement("button");

  button.id = "btn-holiday";
  button.innerText = "Feriados";
  buttonContainer.appendChild(button);
}
criaBotao();

// PARTE 03
//Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
const botaoHolyday = document.querySelector("#btn-holiday");
const listaDiasHolyday = document.querySelectorAll(".holyday");
const corPadrao = "rgb(238,238,238)";
const newCor = "red";


function feriadosCor () {  

  for (let index = 0; index < listaDiasHolyday.length; index+=1) {
    const diaHolyday = listaDiasHolyday[index];
    
    
    if (diaHolyday.style.backgroundColor === newCor) {
      diaHolyday.style.backgroundColor = corPadrao;
    } else {
      diaHolyday.style.backgroundColor = newCor;
    }
  }
}
botaoHolyday.addEventListener("click", feriadosCor);


// PARTE 04
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function botaoSexta () {
  const button = document.createElement("button");
  button.innerText = "Sexta-Feira";
  button.id = "btn-friday";

  buttonContainer.appendChild(button);
}
botaoSexta();

// PARTE 05
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
const buttonSexta = document.querySelector("#btn-friday");
let guardarDiasSextas = [];

function mudarTextoSextas () {
  const listaSextas = document.querySelectorAll(".friday");
  
  for (let index = 0; index < listaSextas.length; index+=1) {
    let sexta = listaSextas[index];

    guardarDiasSextas.push(listaSextas[index].innerText);

    if (sexta.innerText !== "Sextou!") {
      sexta.innerText = "Sextou!";
    } else {
      sexta.innerText = guardarDiasSextas[index];
    }
    
  }

}
buttonSexta.addEventListener("click", mudarTextoSextas);

// PARTE 06
// Implemente duas funções que criem um efeito de “zoom”.
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.
const listaDias = document.getElementById("days");
listaDias.addEventListener("mouseover", darZoom);
listaDias.addEventListener("mouseout", tirarZoom);

function darZoom (event) {  
    event.target.style.fontSize = "30px";
    
}
function tirarZoom (event) {  
  event.target.style.fontSize = "20px";
  
}

// PARTE 07
// Implemente uma função que adicione uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function tarefa (string) {
  const myTask = document.querySelector(".my-tasks");
  const span = document.createElement("span");
  span.innerText = string;

  myTask.appendChild(span);
}
tarefa("cozinhar");

// PARTE 08
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"

function legendaCorTarefa (string) {
  const myTask = document.querySelector(".my-tasks");
  const div = document.createElement("div");
  div.className = "task";
  div.style.backgroundColor = string;

  myTask.appendChild(div);
}
legendaCorTarefa("orange");


// PARTE 09
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
const task = document.querySelector(".task");

function selecionarTarefa() {
  if (task.className !== "task selected") {
    task.className = "task selected";
  } else {
    task.className = "task";
  } 
}
task.addEventListener("click", selecionarTarefa)

// PARTE 10
// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)


// PARTE 11
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”.
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”.
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// Dica - Propriedade: key.