const booksObject = require('./books');

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

// const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName(books) {
  const bookSearched = books.find( (book) => (book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.'));
  return bookSearched.name;
}
console.log(authorWith3DotsOnName(booksObject.books));