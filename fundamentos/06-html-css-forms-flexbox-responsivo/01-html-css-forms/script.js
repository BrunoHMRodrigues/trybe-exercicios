const submit = document.querySelector("#submit");

function submitData (event) {
    event.preventDefault()
}
submit.addEventListener("click", submitData)