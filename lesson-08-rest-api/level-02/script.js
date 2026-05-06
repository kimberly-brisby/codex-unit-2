// Level 02 starter script
// TODO: Get & save the form element to `form`, attach onsubmit, and call event.preventDefault().
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const resultTag = document.getElementById("result");

  resultTag.innerText = "fetch makes HTTP request";
  // TODO: set result.innerText to a short explanation about fetch
}

 