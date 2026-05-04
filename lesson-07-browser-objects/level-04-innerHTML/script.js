// Level 04 — innerHTML starter
// TODO: select an element (e.g. document.getElementById('content'))
// TODO: log previous innerHTML, set a small markup string (e.g. <strong>), then log after value
const divTag = document.getElementById(content);
// Scaffold:
// const el = document.getElementById('content');
// console.log('before innerHTML:', el && el.innerHTML);
// // TODO: el.innerHTML = '<strong>New content</strong>';
// console.log('after innerHTML:', el && el.innerHTML);
console.log(divTag.innerHTML);
divTag.innerHTML = "<h1>Hello World!</h1>";