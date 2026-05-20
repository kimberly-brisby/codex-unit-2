const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  try {
  event.preventDefault();
  const formTag = event.target;
  const data = {
    username: formTag.elements.username.value,
    password: formTag.elements.password.value,
  };
  const dataStrng = JSON.stringify(data);
  const respond = await fetch ("https://dummyjson.com/auth/login",
  {method:"POST",
  body: dataStrng,
  headers: {"Content-Type" :"application/json"},
  });
  const result = await Response.json();
  const message = result.message;
  const firstName = result.firstName;
  const errorTag = document.getElementById("error");
  const successTag = document.getElementById("success");

  if (message) {
    errorTag.innerText = message;
    successTag.innerText = "";
  } else if (firstName) {
    successTag.innerText = "Logged  in!" + firstName;
    errorTag.innerText = "";
    formTag.reset();
  }
} catch (error) {

console.error("Network Error - Try Again")
const errorTag = document.getElementById("error");
errorTag.innerText = "There is an error conneting to server"
  }
}