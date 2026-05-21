const form = document.getElementById("queryForm");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
    const form = event.target;
    const data = {
      catergory: form.elements.catergory.value,
      difficulty: form.elements.difficulty.value,
    }
    const query = new URLSearchParams;
    const response = await fetch("https://the-triva-api.com" + "?" + query);
    const result = await response.json();
    const question = result[0].question.text;
    console.log(question);
    const choiceA = result[0].correctAnswer;
    const choiceTagA = document.getElementById("choiceA");
    choiceTagA.innerText = "choiceA";
  // TODO: Save first question to `question` and separate choices into variables
  // TODO: Render question and choices into DOM
}
