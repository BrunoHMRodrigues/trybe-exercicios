// Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSort = [];

numbersSort = numbers.sort(function(a,b) {return a - b});
for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbersSort[index]);
    
}
