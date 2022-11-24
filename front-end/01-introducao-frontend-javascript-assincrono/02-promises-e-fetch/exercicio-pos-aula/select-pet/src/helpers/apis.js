const animalImage = document.getElementById('animal-image');
const apiDog = 'https://dog.ceo/api/breeds/image/random';
const apiCat = 'https://aws.random.cat/meow';

export async function getDog() {
    animalImage.hidden = false;
    return fetch(apiDog)
        .then((response) => response.json())
        .then((data) => data.message)
    // const dogResponse = await fetch(apiDog);
    // const dogImage = await dogResponse.json();
    // return dogImage;
}

export async function getCat() {
    animalImage.hidden = false;
    return fetch(apiCat)
        .then((response) => response.json())
        .then((data) => data.file)
    // const catResponse = await fetch(apiCat);
    // const catImage = await catResponse.json();
    // return catImage;
}

export async function surprise() {
    // Verificar se código com .any está correto (esta trazendo apenas gatos)
    // animalImage.hidden = false;
    // return Promise.any([getDog(), getCat()])
    //     .then((response) => response);
    const random = Math.round(Math.random());
    return (random === 0) ? getDog() : getCat();
}
