// Level 11 starter script
// TODO: Implement a complete flow: create form, collect values, POST to echo server, render response fields.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");


async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const response = await fetch;
  const json = await response.json;
  const url = response.url;
  const host = response.headers.get("host");
  
  const data ={
    r1: form.elements.r1.value, 
    r2: form.elements.r2.value,
    r2: form.elements.r3.value
  };
   await fetch("https://api.jsoning.com/mock/public/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data),});
  
   const result = document.getElementById("result");
   result.innerText = "I will come back!";

  // TODO: build data object, POST it, parse response, and display three response values
}


