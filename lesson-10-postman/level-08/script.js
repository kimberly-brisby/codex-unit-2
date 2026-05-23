// TODO: Starter for Level 08: implement submit handler.
const form = document.getElementById("api-form");
form.onSubmit = handleSubmit;

async function handleSubmit(event) {
event.preventDefault;
const form = event.target;
const data = {
    name: form.elements.name.value,
};
const dataString = new URLSearchParams;
const response = await fetch("https://api.disneyapi.dev/character" + "?" + datastring);
const result = await response.json();
console.log("Who's that character?");

}
