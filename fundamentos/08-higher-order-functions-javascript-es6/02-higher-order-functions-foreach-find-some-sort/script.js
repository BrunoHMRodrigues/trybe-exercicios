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

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (word) => {
  if (word.length === 5) {
    return true;
  }
};
console.log(names.find(findNameWithFiveLetters));