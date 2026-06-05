const form = document.getElementById("#sample-form");
form.onsubmit = handleSubmit;

function hanldeSubmit(event){
    event.preventDefault();
    const form = event.target();

    const lastName = form.elements.lastName.value;
    const password = form.elements.password.value;

    if(lastName === "Shobe"){
        form.reset();
    }
    console.log("form-reset scaffold");
}