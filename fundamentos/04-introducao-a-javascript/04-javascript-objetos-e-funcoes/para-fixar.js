// Objetos
//Exercicio 01

// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: "Silva",
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     }
// }

// console.log(player);

// For/in e For/of
//Exercicio 01


// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (const key in names) {    
//         console.log("Olá " + names[key]);        
//   }
  
  // Exercicio 02

  // Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (const key in car) {    
//     console.log(key, car[key]);        
// }

// Funções
// Exercicio 01

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// function soma(a,b) {
//     let somar = a + b;

//     return somar;
// }

// function subtracao(a,b) {
//     let subtrair = a - b;

//     return subtrair;
// }

// function multiplicacao(a,b) {
//     let multiplicar = a * b;

//     return multiplicar;
// }

// function divisao(a,b) {
//     let dividir = a / b;

//     return dividir;
// }

// function modulo(a,b) {
//     let modular = a % b;

//     return modular;
// }

// console.log(soma(5,6));
// console.log(subtracao(5,6));
// console.log(multiplicacao(5,6));
// console.log(divisao(5,6));
// console.log(modulo(5,6));

// Exercicio 02

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// function maiorNumero(a,b) {
//     let maior = null
//     if (a > b) {
//         maior = a;
//     } else {
//         maior = b;
//     }
//     return maior;
// }
// console.log(maiorNumero(1,6));

// Exercicio 03

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// function maiorNumero (a,b,c) {
//     let maior = null;
//     if (a > b && a > c) {
//         maior = a;
        
//     } else if (b > a && b> c) {
//         maior = b;        
//     } else {
//         maior = c;
//     }
//     return maior;
// }

// console.log(maiorNumero(1,5,4));

// Exercicio 04

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// function positivoOuNegativo (valor) {
//     if (valor > 0) {
//         return "positive";
//     } else if (valor < 0) {
//         return "negative";
//     } else {
//         return "zero";
//     }
// }

// console.log(positivoOuNegativo(-5));

// Exercicio 05

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

// function eTriangulo (a,b,c) {
//     let somaAngulos = a + b + c;

//     if (a < 0 || b < 0 || c < 0) {
//         return "erro";       
//     } else if (somaAngulos === 180) {
//         return true;
//     } else if (somaAngulos !== 180) {
//         return false;
//     }
// }

// console.log(eTriangulo(90,45,-40));

// Exercicios pós aula ao vivo

// Exercicio 01

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

  // Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
  // Bem-vinda, Margarida

//   console.log("Bem-vinda, " + info.personagem);

  // Exercicio 02

//   Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
// };

// info['recorrente'] = "Sim";

// console.log(info);

// Exercicio 03

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// for (const key in info) {
//     console.log(key);
// }

// Exercicio 04

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// for (const key in info) {
//     console.log(info[key]);
// }

// Exercicio 05

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
// };

// for (const key in info) {
//     console.log(info[key] + " e " + info2[key]);
// }

// Exercicio Foguetinho 01

// Usando o objeto abaixo, faça os exercícios a seguir:

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

  // Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

//   console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

// leitor.livrosFavoritos[1] = {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
// }

// // console.log(leitor);

// // Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

// console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");

// Funções

// Exercicio 01

// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false
// let palavra = "arare";

// function ePalindromo (palavra) {
//     let arrayPalavra = palavra.split('').join();
//     let palavraReversa = palavra.split('').reverse().join();

//     if (arrayPalavra === palavraReversa) {
//         return true
//     } else {
//         return false
//     }
// }


// console.log(ePalindromo(palavra));

// Exercicio 02

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Array de teste: [2, 3, 6, 7, 10, 1];.

// Valor esperado no retorno da função: 4.
// let array = [2, 3, 6, 7, 10, 1];

// function maiorValor (array) {
//     let maior = array[0];
//     let indice = 0
//     for (let index = 0; index < array.length; index +=1) {
//         if (array[index] > maior) {
//             maior = array[index];
//             indice = index
//         }
//     }

//     return indice;
// }
// console.log(maiorValor(array));

// Exercicio 03

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.

// let array = [2, 4, 6, 7, 10, 0, -3];

// function menorValor (array) {
//     let menor = array[0];
//     let indice = 0
//     for (let index = 0; index < array.length; index +=1) {
//         if (array[index] < menor) {
//             menor = array[index];
//             indice = index
//         }
//     }

//     return indice;
// }
// console.log(menorValor(array));

// Exercicio 04

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.

let arrayNomes =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(nomes) {
    let maiorNome = nomes[0];

    for (let index = 0; index < nomes.length; index+=1) {
        if (nomes[index].length > maiorNome.length) {
            maiorNome = nomes[index];
        }
    }
    return maiorNome
}

console.log(maiorNome(arrayNomes));