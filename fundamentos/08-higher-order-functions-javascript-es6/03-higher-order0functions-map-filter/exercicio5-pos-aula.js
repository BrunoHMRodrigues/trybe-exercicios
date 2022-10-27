const booksObject = require('./books');

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

// const expectedResult = [
//     'Frank Herbert',
//     'George R. R. Martin',
//     'Isaac Asimov',
//     'J. R. R. Tolkien',
//   ];
  
  function fantasyOrScienceFictionAuthors(books) {
    const authorsNames = books.filter( (book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia'));
    return authorsNames.map( (element) => element.author.name).sort();
  }
  
  console.log(fantasyOrScienceFictionAuthors(booksObject.books));