const formTag = document.getElementById("login-form");
formTag.onsubmit = handleSubmit;
const errorE12  = document.getElementById("error");
const succesE12 = document.getElementById("succes");

async function handleSubmit(event) {
  try {
  event.preventDefault();
  const form= event.target();
  const data = {
    username: formTag.elements.username.value,
    password: formTag.elements.password.value,
  };
  const dataStrng = JSON.stringify(data);
  const response = await fetch ("https://dummyjson.com/auth/login",
  {method:"POST",
  body: dataStrng,
  headers: {"Content-Type" :"application/json"},
  });
  const result = await response.json();
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

  }
}