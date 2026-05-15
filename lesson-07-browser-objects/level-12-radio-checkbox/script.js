<<<<<<< HEAD
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

=======
// TODO: Read values from radio buttons and checkboxes using form.elements
// Example starter:
>>>>>>> Master
// const form = document.getElementById('sample-form');
// const color = form.elements.color.value;
// const isSubscribed = form.elements.subscribe.checked;
