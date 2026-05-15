<<<<<<< HEAD
// Level 10 — form-elements starter
// TODO: assign a named function to form.onsubmit that reads a text input value
const form = document.querySelector("form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
event.preventDefault();
 const formTag = event.target;
console.log("formTag.elements.email.value");
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
=======
// TODO: In the handler, read form.elements.message.value into `message` and set output.innerText
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const message = form.elements.message.value;
//   document.querySelector('#result').innerText = message;
// }
>>>>>>> Master
