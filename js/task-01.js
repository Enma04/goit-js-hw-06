const CategoriesUl = document.querySelector("#categories");

const itemLi = document.querySelectorAll("li.item");
console.log("Number of categories: ", itemLi.length);

itemLi.forEach( item => {
    const title = item.querySelector("h2");
    const elementos = item.querySelectorAll("li").length;

    console.log( "Category: ", title.textContent);
    console.log("Elements: ", elementos);
});