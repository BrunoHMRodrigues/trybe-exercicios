
function keepStyleStorage () {
    const body = document.getElementsByTagName("body")[0];
    // Background Color
    if (localStorage.getItem("backgroundColor") = null) {
        localStorage.setItem("backgroundColor", "aqua")
        body.style.backgroundColor = "aqua";
    } else {
        body.style.backgroundColor = localStorage.getItem("backgroundColor")
    }

    const paragraph = document.getElementsByTagName("paragraph-text");
    // Font Color
    if (localStorage.getItem("fontColor") = null) {
        localStorage.setItem("fontColor", "black")
        paragraph.style.color = "black";
    } else {
        paragraph.style.color = localStorage.getItem("fontColor")
    }

    // Font Size
    if (localStorage.getItem("fontSize") = null) {
        localStorage.setItem("fontSize", "20px")
        paragraph.style.fontSize = "20px";
    } else {
        paragraph.style.fontSize = localStorage.getItem("fontSize")
    }

    // Font Family
    if (localStorage.getItem("fontFamily") = null) {
        localStorage.setItem("fontFamily", "Times New Roman,Times,serif")
        paragraph.style.fontFamily = "Times New Roman,Times,serif";
    } else {
        paragraph.style.fontFamily = localStorage.getItem("fontFamily")
    }


    // Space between Lines
    if (localStorage.getItem("SpaceLines") = null) {
        localStorage.setItem("SpaceLines", "25px")
        paragraph.style.lineHeight = "25px";
    } else {
        paragraph.style.lineHeight = localStorage.getItem("SpaceLines")
    }
}
keepStyleStorage();

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


const fontFamilyButton1 = document.getElementById("button-text-family1");
const fontFamilyButton2 = document.getElementById("button-text-family2");

function changeFamilySize (event) {
    if (event.target === fontFamilyButton1) {
        paragraph.style.fontFamily = "Times New Roman,Times,serif";      
    } else if (event.target === fontFamilyButton2) {
        paragraph.style.fontFamily = "Arial,Helvetica,sans-serif"      
    }
}
fontFamilyButton1.addEventListener("click", changeFamilySize);
fontFamilyButton2.addEventListener("click", changeFamilySize);


const buttonSpaceLines1 = document.getElementById("button-space-lines1");
const buttonSpaceLines2 = document.getElementById("button-space-lines2");
const buttonSpaceLines3 = document.getElementById("button-space-lines3");

function changeFontSize (event) {
    if (event.target === buttonSpaceLines1) {
        paragraph.style.lineHeight = "25px";        
    } else if (event.target === buttonSpaceLines2) {
        paragraph.style.lineHeight = "35px";       
    } else if (event.target === buttonSpaceLines3) {
        paragraph.style.lineHeight = "45px";        
    }
}
buttonSpaceLines1.addEventListener("click", changeFontSize);
buttonSpaceLines2.addEventListener("click", changeFontSize);
buttonSpaceLines3.addEventListener("click", changeFontSize);

