import { getDog, getCat, surprise } from './helpers/apis'
import './style.css'

const btnDog = document.getElementById('btn-dog');
const btnCat = document.getElementById('btn-cat');
const btnSurprise = document.getElementById('btn-surprise');

btnDog.addEventListener('click', () => {
    getDog();
})

btnCat.addEventListener('click', () => {
    getCat();
})

btnSurprise.addEventListener('click', () => {
    surprise();
})