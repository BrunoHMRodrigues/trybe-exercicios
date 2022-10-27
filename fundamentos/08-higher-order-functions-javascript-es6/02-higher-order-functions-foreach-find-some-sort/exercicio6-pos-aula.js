const booksObject = require('./books');

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

// const expectedResult = true;

function someBookWasReleaseOnThe80s(books) {
    let arrayReleaseYear = [];
    books.forEach(book => {
        arrayReleaseYear.push(book.releaseYear)
    });
    // console.log(arrayReleaseYear);
    return arrayReleaseYear.some( (element) => (element >= 1980 && element < 1990));
}
console.log(someBookWasReleaseOnThe80s(booksObject.books));