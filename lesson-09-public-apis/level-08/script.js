const form = document.getElementById("jokeForm");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    api: "cb612559bbf74a23a8917dfff4cdbb96"
  };

  const query = new URLSearchParams(data);
  const response = await fetch("https://api.humorapi.com/memes/random " + "?" + "cb612559bbf74a23a8917dfff4cdbb96");
  const result = await fetch(url + "?" );
  console.log(question) 

  // TODO: Create a `data` object with an "api-key" property (quoted when hyphenated)
  // TODO: Convert `data` into a query string and fetch jokes (or send as header if API requires)
  // TODO: Parse response and render a joke into the DOM. On invalid key, show an error message in the page
}
