const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const lista = document.querySelector("#ingredients");

ingredients.forEach( ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");

  lista.append(li);
});
