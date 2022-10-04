const body = document.getElementsByTagName("body")[0];

const backgroundColorButton1 = document.getElementById("button-background-color1");
const backgroundColorButton2 = document.getElementById("button-background-color2");
const backgroundColorButton3 = document.getElementById("button-background-color3");

function changeBackgroundColor (event) {
    if (event.target === backgroundColorButton1) {
        body.style.backgroundColor = "aqua";        
    } else if (event.target === backgroundColorButton2) {
        body.style.backgroundColor = "lightgreen";        
    } else if (event.target === backgroundColorButton3) {
        body.style.backgroundColor = "lightcoral";        
    }
}
backgroundColorButton1.addEventListener("click", changeBackgroundColor);
backgroundColorButton2.addEventListener("click", changeBackgroundColor);
backgroundColorButton3.addEventListener("click", changeBackgroundColor);
