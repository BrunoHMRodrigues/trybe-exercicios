// Exercicio Foguetinho 01

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 01 - Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (const number of numbers) {
//     console.log(number);
// }

// 02 - Some todos os valores contidos no array e imprima o resultado;
// let sum = 0;

// for (const number of numbers) {
//     sum = sum + number;
// }

// console.log(sum);

// 03 - Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// let sum = 0;
// let mediaAritmetica = 0;

// for (const number of numbers) {
//      sum = sum + number;
// }

// mediaAritmetica = sum / numbers.length;

// console.log(mediaAritmetica);

// 04 - Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”

// if (mediaAritmetica > 20) {
//     console.log("valor maior que 20");
// } else {
//     console.log("valor menor ou igual a 20");
// }

// 05 - Utilizando for, descubra qual o maior valor contido no array e imprima-o
// let maiorValor = 0;

// for (const number of numbers) {
//     if (number > maiorValor) {
//         maiorValor = number
//     }
// }

// console.log(maiorValor);

// 06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”
// let contadorImpar = 0;

// for (const number of numbers) {
//     if (number % 2 === 1) {
//         contadorImpar = contadorImpar +=1
//     }
// }

// console.log(contadorImpar);

// 07 - Utilizando for, descubra qual o menor valor contido no array e imprima-o
// let menorValor = numbers[0];

// for (const number of numbers) {
//     if (number < menorValor) {
//         menorValor = number
//     }
// }

// console.log(menorValor);

// 08 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado
let array = [];

for (let index = 0; index < 25; index+=1) {
    array[index] = index + 1;    
}

console.log(array);

// 09 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2
let divisao = null;

for (const number of array) {
    divisao = number / 2;
    console.log(divisao);
}