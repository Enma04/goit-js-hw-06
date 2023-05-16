function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divPrincipal = document.querySelector("#controls");
const input = document.querySelector("#controls input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");

function createBoxes() {
  let amount = parseInt(input.value);
  let size = 30;

  for(let i = 1; i <= amount; i += 1) {
    let div = document.createElement("div");
    div.classList.add("bloque");
    div.style.marginTop = "10px";
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `${getRandomHexColor()}`;
    divPrincipal.append(div);
    size += 10;
  }
}

function destroyBoxes() {
  let elements = parseInt(input.value);

  for(let i = 1; i <= elements; i += 1) {
    document.querySelector("div.bloque").remove();
  }
}

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);





//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------


/* create.addEventListener("click", () => {
  let elements = parseInt(input.value);
  let size = 30;

  for(let i = 1; i <= elements; i += 1) {
    let div = document.createElement("div");
    div.classList.add("bloque");
    div.style.marginTop = "10px";
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `${getRandomHexColor()}`;
    divPrincipal.append(div);
    size += 10;
  }
});

destroy.addEventListener("click", () => {
  let elements = parseInt(input.value);
  for(let i = 1; i <= elements; i += 1) {
    document.querySelector("div.bloque").remove();
  }
}); */
