// 01 - Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSort = [];

// numbersSort = numbers.sort(function(a,b) {return a - b});
// for (let index = 0; index < numbers.length; index+=1) {
//     console.log(numbersSort[index]);
    
// }

// 02 - Ordene o array numbers em ordem decrescente e imprima seus valores

// numbersSort = numbers.sort(function(a,b) {return b - a});
// for (let index = 0; index < numbers.length; index+=1) {
//     console.log(numbersSort[index]);
    
// }

// 03 - Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
let numerosMultiplicados = [];

for (let index = 0; index < numbers.length; index+=1) {
    if (index < numbers.length - 1) {
        numerosMultiplicados[index] = numbers[index] * numbers[index+1];
    } else {
        numerosMultiplicados[index] = numbers[index] * 2;
    }  
    console.log(numerosMultiplicados[index]);
}


