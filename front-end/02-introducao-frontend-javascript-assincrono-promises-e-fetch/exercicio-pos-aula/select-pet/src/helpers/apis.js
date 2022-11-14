const animalImage = document.getElementById('animal-image');
const apiDog = 'https://dog.ceo/api/breeds/image/random';
const apiCat = 'https://aws.random.cat/meow';

export function getDog() {
    animalImage.hidden = false;
    return fetch(apiDog)
        .then((response) => response.json())
        .then((data) => animalImage.src = data.message)
}

export function getCat() {
    animalImage.hidden = false;
    return fetch(apiCat)
        .then((response) => response.json())
        .then((data) => animalImage.src = data.file)
}

export function surprise() {
    const dog = new Promise((resolve, reject) => getDog());
    const cat = new Promise((resolve, reject) => getCat());

    animalImage.hidden = false;
    Promise.race([dog, cat]).then((result) => result)
}
