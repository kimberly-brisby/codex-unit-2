const form = document.getElementById("queryForm");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  data = {
    category: form.elements.categories.value,
    ddifficulty: form.elements.ddifficulties.value,
  };
  const queryString = new URLSearchParams(data);
  const response = await fetch( "https://the-triva-api.com/v2/question" + "?" + queryString,);
  const result = await response.json();
  const question = result[0].question.text;
  console.log(question);
  const outTag = document.querySelector("#out");
  outTag.innerHTML = "<h3>" + question + "</h3>";
  // TODO: Build data object from formTag.elements and convert with URLSearchParams
  // TODO: Use async/await with fetch to call https://the-trivia-api.com/v2/questions
  // TODO: Parse `result` and display result[0].question.text into the DOM
}
