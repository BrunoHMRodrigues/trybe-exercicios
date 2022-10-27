const booksObject = require('./books');

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const expectedResult = false;

function everyoneWasBornOnSecXX(books) {
    let arrayYearBirth = [];
    books.forEach(book => {
        arrayYearBirth.push(book.author.birthYear)
    });
    // console.log(arrayYearBirth);
    return arrayYearBirth.every( (element) => (element >= 1900 && element < 2000));
}
console.log(everyoneWasBornOnSecXX(booksObject.books));