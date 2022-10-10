// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


const href = document.getElementById("href");

function clicarLink(event) {
    event.preventDefault();
}

href.addEventListener("click", clicarLink);

const checkBox = document.getElementById("input-checkbox");
function checkBoxClick(event) {
    event.preventDefault();
}
checkBox.addEventListener("click", checkBoxClick)

const inputText = document.getElementById("input-text");

function keyPressInput(event) {
    if (event.key !== "a") {
        event.preventDefault();
    }    
}
inputText.addEventListener("keypress", keyPressInput);