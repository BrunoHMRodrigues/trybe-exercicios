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

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (const key in car) {    
    console.log(key, car[key]);        
}