import validator from 'validator';
import './style.css';

const text = document.getElementById('text');
const choices = document.getElementById('types-text');
const btnValidate = document.getElementById(('btn-validate'));
const answer = document.getElementById('answer');

btnValidate.addEventListener('click', (event) => {
    let result = false;

    switch (choices.value) {
        case 'cpf':
            result = validator.isTaxID(text.value, 'pt-BR');
            break;
        case 'email':
            result = validator.isEmail(text.value);
            break;
        case 'url':
            result = validator.isURL(text.value);
        default:
            break;
    }
    answer.innerHTML = `A validação do texto para a categoria ${choices.value} é: ${result}`
})