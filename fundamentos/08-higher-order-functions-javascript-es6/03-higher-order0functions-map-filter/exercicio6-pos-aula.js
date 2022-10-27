const booksObject = require('./books');

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

// const expectedResult = [
//     'O Senhor dos Anéis',
//     'Fundação',
//     'O Chamado de Cthulhu',
//   ];
  
  function oldBooks(books) {
    const booksMore60 = books.filter( (book) => (2020 - book.releaseYear) > 60);
    return booksMore60.map( (element) => element.name)
  }
  console.log(oldBooks(booksObject.books));