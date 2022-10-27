// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
//   emailListInData.forEach(showEmailList);

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) => {    
//   if (number % 3 === 0 && number % 5 === 0) {
//     return true;
//   }
// };
// console.log(numbers.find(findDivisibleBy3And5));

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (word) => {
//   if (word.length === 5) {
//     return true;
//   }
// };
// console.log(names.find(findNameWithFiveLetters));

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ];
  
//   function findMusic(element) {
//     if (element.id === '31031685') {
//         return true;
//     }
//   };
  
//   console.log(musicas.find(findMusic));

//   const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ];
  
//   function findMusic(id) {
//     return musicas.find( (element) => {
//         if (element.id === id) {
//             return true;
//         }
//     });
//   };
  
//   console.log(findMusic('31031685'));

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   return arr.some( (element) => {
//     if (element === name) {
//         return true;
//     }
//   })
// };

// console.log(hasName(names, 'Ana'));

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people.sort( (a, b) => a.age - b.age);
  // Adicione se código aqui
  
  console.log(people);