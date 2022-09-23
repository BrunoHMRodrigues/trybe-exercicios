// Exercicio 1
// crie um algoritmo que imprima na tela o fatorial de 10.
// let fatorial = 1;

// for (let index = 1; index <= 10; index+=1) {
//     fatorial = fatorial * index;
// }
// console.log(fatorial);

// Exercicio 2
// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let newWord = "";

// for (let index = word.length - 1; index >= 0; index-=1) {
//     newWord = newWord + word[index];
// }

// console.log(newWord);

//Exercicio 3


let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let menorPalavra = array[0];
let maiorPalavra = array[0];

for (let index = 0; index < array.length; index+=1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }

    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
    
}
console.log(maiorPalavra);
console.log(menorPalavra);