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

function maiorNumero (a,b,c) {
    let maior = null;
    if (a > b && a > c) {
        maior = a;
        
    } else if (b > a && b> c) {
        maior = b;        
    } else {
        maior = c;
    }
    return maior;
}

console.log(maiorNumero(1,5,4));
