// let id = document.getElementById(`hey`);
// console.log(id);

// id = id.className;
// id = id.childNodes;
// id.style.color = `red`;
// id.innerText = `Dharmil`;
// id.innerHTML = `<b>Dharmil</b>`
// console.log(id);

let quer = document.querySelector(`#hey`);
quer = document.querySelector(`.child`);
quer = document.querySelector(`div`); // This will be returning the very first div in html file
// console.log(quer);

let ele = document.getElementsByClassName(`child`);
ele = document.getElementsByTagName(`div`)

Array.from(ele).forEach(a => {
console.log(a);
a.style.color = `aqua`
});
console.log(ele);