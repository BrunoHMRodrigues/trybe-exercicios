import { getDog, getCat, surprise } from './helpers/apis'
import './style.css'

const btnDog = document.getElementById('btn-dog');
const btnCat = document.getElementById('btn-cat');
const btnSurprise = document.getElementById('btn-surprise');
const animalImage = document.getElementById('animal-image');

btnDog.addEventListener('click', async () => {
    animalImage.src = await getDog();
})

btnCat.addEventListener('click', async () => {
    animalImage.src = await getCat();
})

btnSurprise.addEventListener('click', async () => {
    animalImage.src = await surprise();
})