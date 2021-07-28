// Click Event
/*
document.getElementById(`heading`).addEventListener(
    `click`, function(n){
        console.log(`You Have Clicked Heading`);

        // Event Object
       let varialbe;
       varialbe = n.target;
       varialbe = n.target.id;
       varialbe = Array.from(n.target.id);
       console.log(varialbe);
    }
)
*/

let btn = document.getElementById(`btn`);
btn.addEventListener(`click`, func);
btn.addEventListener(`dblclick`, func1); // dblclick refers to double click

function func(e)
{
    console.log(`Thanks`, e); // This e will be returning the MouseEvent object.
    e.preventDefault(); // This Will Prevent The Form From Submitting.
}

function func1(e)
{
    console.log(`Thanks It's A Double Click`, e); // This e will be returning the MouseEvent object.
    e.preventDefault(); // This Will Prevent The Form From Submitting.
}

// Another EVents Are:
// 1. mousedown
// 2. mouseenter
// 3. mousemove
// 4. mouseleave

let col = document.querySelector(`.container`).addEventListener(`mouseover`, funct);
function funct(a) {
    console.log(a.offsetX);
    document.body.style.backgroundColor = `rgb(${a.offsetX}, ${a.offsetX}, 25)`; // Here The BackgroundColor Will Be Automatically Changed On Hovering
}

