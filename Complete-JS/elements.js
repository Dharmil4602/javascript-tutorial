// Creating Element Using JavaScript

let element = document.createElement(`li`);
element.className = `child`;
element.id = `ulid`;
element.setAttribute(`Title`, `This Title Is Created Using JS`);
// element.innerText = `Hey There This Is Dharmil Here`;

let ul = document.querySelector(`ul.this`);
ul.appendChild(element);

let text = document.createTextNode(`Hello There`);
element.appendChild(text);
// console.log(ul)
// console.log(element);

// Replacing Element

let ele = document.createElement(`h2`);
ele.id = `ele`;
ele.className = `ele`;
let tnode = document.createTextNode(`This Is Text Node Here`);
ele.appendChild(tnode);
element.replaceWith(ele);

// Replacing Child

let myul = document.getElementById(`myul`);
myul.replaceChild(element, document.getElementById(`myid`)); // Here what we want to replace is written first and then where we want to replace is written.

// Removing Child

myul.removeChild(document.getElementById(`mynotid`));
console.log(ele);
