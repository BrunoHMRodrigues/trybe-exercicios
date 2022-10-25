// const dataPerson = (completedName) => {
//     const createEmail = completedName.replace(/\s/g, '').toLowerCase();
//     const objectPerson = {
//         nomeCompleto: completedName,
//         email: `${createEmail}@trybe.com`,
//     }
//     return objectPerson;
// };
// const newEmployees = (completedName) => {
//     const employees = {
//       id1: dataPerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: dataPerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: dataPerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   console.log(newEmployees(dataPerson));
const randomGame = (betNumber, randomNumber) => {
    console.log('betnumber: ' + betNumber);
    console.log('random number: ' + randomNumber);
    const result = (betNumber === randomNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
    // let result = '';
    // if (betNumber === randomNumber) {
    //     result = 'Parabéns você ganhou';
    // } else {
    //     result = 'Tente novamente';
    // }
    return result;
};

const result = (betNumber, callback) => {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    return callback(betNumber, randomNumber);    
};
console.log(result(3, randomGame));