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


const fontColorButton1 = document.getElementById("button-text-color1");
const fontColorButton2 = document.getElementById("button-text-color2");
const fontColorButton3 = document.getElementById("button-text-color3");
const paragraph = document.getElementById("paragraph-text");

function changeFontColor (event) {
    if (event.target === fontColorButton1) {
        paragraph.style.color = "black";        
    } else if (event.target === fontColorButton2) {
        paragraph.style.color = "red";        
    } else if (event.target === fontColorButton3) {
        paragraph.style.color = "green";        
    }
}
fontColorButton1.addEventListener("click", changeFontColor);
fontColorButton2.addEventListener("click", changeFontColor);
fontColorButton3.addEventListener("click", changeFontColor);


const fontSizeButton1 = document.getElementById("button-font-size1");
const fontSizeButton2 = document.getElementById("button-font-size2");
const fontSizeButton3 = document.getElementById("button-font-size3");

function changeFontSize (event) {
    if (event.target === fontSizeButton1) {
        paragraph.style.fontSize = "20px";        
    } else if (event.target === fontSizeButton2) {
        paragraph.style.fontSize = "25px";       
    } else if (event.target === fontSizeButton3) {
        paragraph.style.fontSize = "30px";        
    }
}
fontSizeButton1.addEventListener("click", changeFontSize);
fontSizeButton2.addEventListener("click", changeFontSize);
fontSizeButton3.addEventListener("click", changeFontSize);
