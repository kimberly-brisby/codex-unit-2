// Level 10 starter script
// TODO: POST pre-processed data, parse JSON response, and display three selected values.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    v1:form.elements.v1.value,
    v2:form.elements.v2.value,
    v3:form.elements.v3.value,
  };
  await fetch("https://api.jsoning.com/mock/public/users",{method:"POST",headers:{"Content-Type":"application/json"}body:JSON.stringify(data)});

  // TODO: collect data, POST to echo server, parse response, and insert values into v1/v2/v3
}


