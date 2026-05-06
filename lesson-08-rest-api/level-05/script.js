// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;


async function handleSubmit(e) {
  e.preventDefault();
  // TODO: implement fetch and set the three elements' innerText
const pUsername = document.getElementById("username");
const pEmail = document.getElementById("email");
const pId = document.getElementById("id");
const response = await fetch("http://api.jsoning.com/mock/public/users");
const json = await response.json();
const url = response.url;
const host = response.headers.get("host");
}

