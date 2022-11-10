import './style.css';

function randomNumber() {
    return Math.round((Math.random() * 599)+1)
}

const heroImage = document.getElementById('hero-image');
const heroName = document.getElementById('hero-name');
const buttonHero = document.getElementById('button-random-hero');

buttonHero.addEventListener('click', () => {
    const accesToken = '5644837492266279';
    const numberID = randomNumber();
    const baseAPI = `https://www.superheroapi.com/api.php/${accesToken}/`;
    
    fetch(`${baseAPI}/${numberID}`)
        .then((response) => response.json())
        .then((data) => {
            heroImage.src = data.image.url;
            heroName.innerText = data.name;
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Hero not found',
                text: error.message,
                footer: '<a href="">A hero was not found</a>'
              })
        })
})