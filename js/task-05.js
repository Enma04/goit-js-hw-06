let textInput = document.querySelector("input#name-input");
let textOutput = document.querySelector("span#name-output");

textInput.addEventListener("input", (evento) => {
  if(!evento.currentTarget.value) {
    textOutput.textContent = "Anonymous";
  }
  else {
    textOutput.textContent = evento.currentTarget.value;
  }
});



