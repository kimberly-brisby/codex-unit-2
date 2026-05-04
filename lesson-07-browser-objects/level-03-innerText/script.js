// Level 03 — innerText starter
const pTag = document.getElementById(desc); 

// Scaffold:
// const el = document.getElementById('desc');
// console.log('before:', el && el.innerText);
// // TODO: set el.innerText = '...';
// console.log('after:', el && el.innerText);
console.log(pTag.innerText);
pTag.innerText = "Hello World!";
console.log(pTag.innerText);