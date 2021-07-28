// Alert In in-browser JavaScript - It does not returns anything

// alert(`Hey There, I Am Up Here....!!!`)

// Prompt

// /*
// let name = prompt(`What Is Your Name?`, `Enter Your Name Here`);
// console.log(name)
// */

// Confirm

let del = confirm(`Do You Want To Delete It?`);
if (del) {
    alert(`Your Post Has Been Deleted`);
}
else
{
    alert(`You Have Not Deleted Your Post`);
}
console.log(del);