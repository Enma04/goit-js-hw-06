const form = document.querySelector(".login-form");

const retorna = function(evn) {
    evn.preventDefault(); //Previente la recarga de la página

    //La desestructuración con la palabra "events", añade los valores
    //de los nombres en cada variable que encuentre en "name"
    const {
        elements: { email, password },
    } = evn.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("No puede haber campos vacíos!");
    }
    
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    evn.currentTarget.reset(); //Vacía los campos llenos
}

form.addEventListener("submit", retorna)
