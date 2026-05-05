// Level 11 — textarea-range starter
// TODO: in submit handler read textarea and range values via form.elements and convert range with Number()
const form = document.getElementById(volume);
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  evevnt.prevevntDefault;
   const form = event.target;
   const message = form.elements.message.value;
   const volume = Number(form.elements.volume.value);
  console.log("textarea & range, vol");
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
