// Level 04 starter script
// TODO: Await fetch and call response.json() to parse the body.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const result = document.getElementById("result");
  const response = await fetch ("http://jsonong.com/mock/public/users");
  const json  = await response.json();
  json.innerText = "Parse JSON is a returned value from the browser.";
  // TODO: fetch and parse JSON, then set result.innerText with a short explanation
}

 
