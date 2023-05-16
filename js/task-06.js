const input = document.querySelector("#validation-input");

input.addEventListener("blur", (evento) => {
    if( evento.currentTarget.value.length === 6 ) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        return;
    }
    input.classList.remove("valid");
    input.classList.add("invalid");
});
