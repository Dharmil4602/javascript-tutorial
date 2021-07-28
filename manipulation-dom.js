let main = document.getElementById(`main`);
console.log(main);

let containers = document.getElementsByClassName(`container`);
console.log(containers);

// Query Selector

// let sel = document.querySelector(`.container`);
// console.log(sel);

// The Below Code Will Return Only One Element.

// let sel = document.querySelector(`#navbar>li`);
// console.log(sel);

// The Below Code Will Return All The Elements.
let sel = document.querySelectorAll(`#navbar>li`);
console.log(sel);
