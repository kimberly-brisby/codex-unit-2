const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  // TODO: Construct `data` from formTag.elements
  const data = {
    userName: formTag.elements.userName.value,
    password: formTag.elements.password.value,

  }
  // TODO: Format data with `URLSearchParams` or `JSON.stringify`
  const dataString = JSON.stringify(data);
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body:dataString,
  });
  
  const result = await response.json();
  const message = result.message;

  // TODO: Save formatted data into `dataString` and send via fetch using async/await
  // TODO: Parse `result` and update the page; handle errors with try/catch
  const errorTag = document.getElementById("error");
  const successTag = document.getElementById("success");

 try {
  
 }
  
}
