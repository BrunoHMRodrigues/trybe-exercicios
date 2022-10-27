const booksObject = require('./books');

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
  
  function oldBooksOrdered(books) {
    const oldBooks = books.filter( (book) => (2022 - book.releaseYear) > 60);

    return oldBooks.sort( (a, b) => (2022 - a.releaseYear) < (2022 - b.releaseYear) ? 1 : -1);
  }
  console.log(oldBooksOrdered(booksObject.books));

//   const expectedResult = [
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//       releaseYear: 1928,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954,
//     },
//   ];