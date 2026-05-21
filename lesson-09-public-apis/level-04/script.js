const form = document.getElementById("queryForm");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    category: form.element.category.value, 
    difficulty: form.element.difficulty.value,
  } 

  const query = new URLSearchParams(data);
  const response = await fetch ( "https://the-triva-api.com/v2/question" );
  const result = await response.json();
  console.log(query);
  // TODO: Read form values with formTag.elements and create `data` object
  // TODO: Use `new URLSearchParams(data)` to create a query string and save to `query`
  // TODO: console.log(query)
}
