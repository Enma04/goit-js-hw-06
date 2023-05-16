//Obtengo todo el tag con quertySelector en counterValue
const counterValue = document.querySelector("#value");
//Obtengo los tag de los botones
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

//Paso el texto obtenido del tag, con .textContent, en counterValue
//y lo convierto a número
let valor = parseInt(counterValue.textContent);

//Declaro las funciones callback
incrementBtn.addEventListener("click", () => {
    valor += 1;
    counterValue.textContent = valor;
});

decrementBtn.addEventListener("click", () => {
    valor -= 1;
    counterValue.textContent = valor;
});

