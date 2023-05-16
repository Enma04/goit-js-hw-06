const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.addEventListener("input", e => {
    let currentValue = parseInt(e.currentTarget.value);
    text.style.fontSize = `${currentValue}px`;
});

