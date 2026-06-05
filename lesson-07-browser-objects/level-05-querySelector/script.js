// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')
// TODO: log previous content and update nodes (iterate NodeList with forEach)
const liTag = document.querySelector("#content");
// Scaffold:
// const one = document.querySelector('#content');
// console.log('before:', one && one.innerHTML);
console.log(content)
// // TODO: one.innerHTML = '...';
// const list = document.querySelectorAll('.item');
// list.forEach((el, i) => {
//   // TODO: update each el.innerText
// });
liTag.innerHTML = "<h2>The querySelector returns the first matching elemnet versus the getElemntById is used for max speed and clarity.</h2>";
console.log(liTag.innerHTML)