document.getElementById("header-container").style.color = "white";
document.getElementById("header-container").style.backgroundColor = "green";

for (let index = 0; index < document.querySelectorAll(".emergency-tasks div h3").length; index+=1) {
    document.querySelectorAll(".emergency-tasks div h3")[index].style.color = "white";
    document.querySelectorAll(".emergency-tasks div h3")[index].style.backgroundColor = "purple";

    document.querySelectorAll(".no-emergency-tasks div h3")[index].style.color = "white";
    document.querySelectorAll(".no-emergency-tasks div h3")[index].style.backgroundColor = "black";    
}

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "salmon";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";

document.getElementById("footer-container").style.backgroundColor = "darkgreen";
