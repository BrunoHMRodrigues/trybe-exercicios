const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  // Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const expectedResult = 20;

const countA = (word) => {
    let counter = 0;
    const arrayWord = word.split('');
    arrayWord.forEach( (letter) => counter += (letter[0] === 'a' || letter[0] === 'A') ?  1 : 0);
    return counter;
}

// console.log(countA('Abacaxi'));

function containsA(arrayNames) {
    return arrayNames.reduce( (acc, name) => acc += countA(name), 0);
}
console.log(containsA(names));