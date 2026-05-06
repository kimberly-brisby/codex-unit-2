// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;


async function handleSubmit(event) {
  event.preventDefault();
  const result = document.getElementById("result");
  const response = fetch("https://api.jsoning.com/mock/public/users");
  result.innerText = "async/await function takes time for the value to return and the browser to fully finish running.";
  // TODO: use async/await to call fetch('https://api.jsoning.com/mock/public/users') and then set result.innerText
}


