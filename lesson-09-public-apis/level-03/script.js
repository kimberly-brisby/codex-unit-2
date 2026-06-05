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

  if (!response.ok) {
  throw new Error("HTTP" + response.status);
  
  }
} catch (error) {

console.log("Error")
errorE12.innerText = "Network error-try again";

  }
}