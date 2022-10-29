const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(elements) {
    return elements.reduce( (accumulate, curr) => accumulate.concat(curr) );
  }
  console.log(flatten(arrays));

  