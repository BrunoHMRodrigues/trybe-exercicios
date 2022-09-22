// Exercicio Foguetinho 01

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (const number of numbers) {
//     console.log(number);
// }

// Some todos os valores contidos no array e imprima o resultado;
let sum = 0;

for (const number of numbers) {
    sum = sum + number;
}

console.log(sum);