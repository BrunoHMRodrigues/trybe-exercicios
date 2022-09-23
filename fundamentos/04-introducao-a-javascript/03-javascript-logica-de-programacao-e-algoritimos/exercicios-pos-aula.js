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


// let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let menorPalavra = array[0];
// let maiorPalavra = array[0];

// for (let index = 0; index < array.length; index+=1) {
//     if (array[index].length > maiorPalavra.length) {
//         maiorPalavra = array[index];
//     }

//     if (array[index].length < menorPalavra.length) {
//         menorPalavra = array[index];
//     }
    
// }
// console.log(maiorPalavra);
// console.log(menorPalavra);

// Exercicio 4
// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

// let numbers = [];
// let contDivisores = 0;
// let maiorPrimo = 0;

// for (let index = 0; index <= 50-2; index+=1) {
//     numbers.push(index + 2);
//     contDivisores = 0;

//     for (let index2 = 1; index2 <= (index+2); index2+=1) {
//         if ((index+2) % index2 == 0) {
//             contDivisores +=1;
//         }        
//     }
//     if (contDivisores == 2) {
//         maiorPrimo = index+2;
//     }
// }

// console.log(maiorPrimo);

// Exercicios Bônus
//Exercicio Bônus 1

// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// let n = 5;
// let strAsteriscos = "";

// if (n > 1) {
//     for (let index = 0; index < n; index+=1) {
//         strAsteriscos = strAsteriscos + "*";
        
//     }

//     for (let index = 0; index < n; index+=1) {
//         console.log(strAsteriscos);        
//     }
// }

// Exercicio Bônus 2
// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// let n = 5;
//  let strAsteriscos = "";

//  if (n > 1) {
//      for (let index = 0; index < n; index+=1) {
//         strAsteriscos = strAsteriscos + "*";
//         console.log(strAsteriscos);
//     }
// }

// Exercicio Bônus 3
// Agora inverta o lado do triângulo.

let n = 5;
let strAsteriscos = "";
let espacamento = "";

if (n > 1) {
    for (let index = 0; index < n; index+=1) {
        espacamento = "";

        for (let index2 = 0; index2 < n-index-1; index2+=1) {
            espacamento = espacamento + " ";
            
        }
        strAsteriscos = strAsteriscos + "*";
        console.log(espacamento + strAsteriscos);
    }
}













// Lógica errada para exercicio 3, mas guardada
// let n = 5;
// let strAsteriscos = "";

//  if (n > 1) {
//     for (let index = 0; index < n; index+=1) {
//         strAsteriscos = strAsteriscos + "*";
                
//     }

//     console.log(strAsteriscos)
//     for (let index = 1; index < strAsteriscos.length; index+=1) {
//         console.log(strAsteriscos.slice(0,-index));
//     }
// }



