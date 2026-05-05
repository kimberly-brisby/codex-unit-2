// Level 13 — form-reset starter
// TODO: validate one field in submit handler, on success display summary and call form.reset()
const form = document.querySelector("form");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {  
  event.preventDefault();
  const formTag = event.target();
  const usrname = formTag.elements.username.value;
  if (username === "Kim"){
    formTag.reset();
  }
  console.log("form-reset scaffold");
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
