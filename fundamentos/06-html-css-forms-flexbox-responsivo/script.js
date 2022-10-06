// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


const href = document.getElementById("href");

function clicarLink(event) {
    event.preventDefault()
}

href.addEventListener("click", clicarLink);