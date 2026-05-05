// Level 12 — radio-checkbox starter
// TODO: in submit handler read radio via form.elements.color.value and checkbox via form.elements.subscribe.checked
cosnt form = document.getElementById(form);
form.onsubmit = handleSubmit;

function handleSubmit(event) {
   event.preventDefault();
   const form = event.target;
   const color = form.elements.color.value;
   const subscribe = form.elements.subscribe.checked;
  console.log("form.elements.color.value, form.elements.subscribe.checked");
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
