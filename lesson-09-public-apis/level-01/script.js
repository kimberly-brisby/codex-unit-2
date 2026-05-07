const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;


async function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;  
  const data = {
    email: formTag.elements.email.value,
    password: formTag.elements.password.value
  };
    const dataString =JSON.stringify(data);
    const response = await fectch ("https://dummyjson.com/auth/login",{
      method:"POST",
      body:dataString,
      headers:{"Content-Type":"application/json"}
    });

    const result = await response.json();

  };

  
