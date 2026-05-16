const form = document.getElementById("loginForm");
const errorE1 = document.getElementById("error");
const successE1 = document.getElementById("success");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  const data = {
    username: formTag.elements.username.value,
    password: formTag.elements.password.value, 
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://dummyjson.com/auth/login",{method: "POST",
    body: dataString,
    headers: {"Content-Type": "application/json"}
  });
  const result = await response.json();
  const message = result.message;
  const firstName = result.firstName;
  const errorTag = document.getElementById("error");
  const successTag = document.getElementById("success");

  if (message !== undefined){
     errorTag.innerText = "Invalid Credentials";
     successTag.innerText = "";
  } else if (firstName != undefined) {
    successTag.innerText = "Logged In!";
    errorTag.innerText = "";
    formTag.reset();
  }
  // TODO: Parse response into `result` and update `errorEl.innerText` or `successEl.innerText`
  // TODO: On success, call form.reset()
}
