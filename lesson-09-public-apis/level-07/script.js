const messageEl = document.getElementById("message");

// TODO: Select the message element and insert a short explanation about API keys
const message = document.getElementById("message");
message.innerText = "API keys idenify your app to a service."; 
if (messageEl) {
  messageEl.innerText =
    "API keys identify your app to a service; do not commit them publicly.";
}
