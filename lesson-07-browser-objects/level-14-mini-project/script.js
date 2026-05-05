// Level 14 — mini-project starter
// TODO: build a small form handler that prevents default, reads values via form.elements, validates, displays summary, and resets the form
const pTag = document.getElementById("desc");
pTag.onsubmit = handleSubmit;

function handleSubmit(event) {
event.preventDefault(); 
  const pTag = event.target;
  // TODO: read name, message, volume, selected radio, checkbox
  // TODO: validate required fields, display summary, then form.reset();
  console.log(pTag.innerText);
  pTag.innerText = "Hello World";
  console.log(pTag.innerText);
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
const form = document.querySelector(#sample-form);

console.log("form.id");
  console.log(form.name);
  console.log(form.elements.length);