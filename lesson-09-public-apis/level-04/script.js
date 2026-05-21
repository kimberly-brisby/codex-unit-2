const form = document.getElementById("queryForm");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    category: form.element.category.value, 
    difficulty: form.element.difficulty.value,
  } 
  const queryString = new URLSearchParams(data);
  console.log(queryString);
  // TODO: Read form values with formTag.elements and create `data` object
  // TODO: Use `new URLSearchParams(data)` to create a query string and save to `query`
  // TODO: console.log(query)
}
