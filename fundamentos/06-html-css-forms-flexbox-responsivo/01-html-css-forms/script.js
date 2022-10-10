const submit = document.querySelector("#submit");

function submitData (event) {
    // event.preventDefault()

    const name = document.querySelector("#userName");
    if (name.ariaValueMax.length < 10) {
        alert("Dados Inválidos")
    }
}
submit.addEventListener("click", submitData)