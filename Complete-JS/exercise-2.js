// Creating The Div
let divEle = document.createElement(`div`);


// Entering Text Into Div And Storing It In Local Storage

let val = localStorage.getItem(`text`); // Here texted is that thing which will be stored

let text;
if (val == null) {
    
    text = document.createTextNode(`Click Here To Edit`);
}

else
{
    document.createTextNode(val);
}

divEle.appendChild(text);


// Creating class and id and style
divEle.setAttribute(`id`, `elem`);
divEle.setAttribute(`class`, `elem`);
divEle.setAttribute(`style`, `border: 2px solid black; width: 200px; margin: 34px; padding: 40px;`);

// Fetching Main Container
let cont = document.querySelector(`.container`);
let first = document.getElementById(`myul`);

cont.insertBefore(divEle, first); // In brackets, the format is: (`The One You Want To Insert`, `Before Which Element You Want To Insert Your Element`)

console.log(divEle, cont, first);


// Adding Eventlistener To Edit The Div

divEle.addEventListener(`click`, function(){

    let noText = document.getElementsByClassName(`textarea`).length;

    if(noText == 0)
    {

        // let html = `<textarea class="textarea" id="textarea" rows="3"></textarea>`;
        let html = elem.innerHTML; // Here editablediv is the id
        divEle.innerHTML = `<textarea class="textarea" id="textarea" rows="3"> ${html}</textarea>`;
    }
    // Now Saving The Text That We Edited:

    let textarea = document.getElementById(`textarea`);
    // blur is used to save the the text that we edited as soon as we click outside the textarea
    textarea.addEventListener(`blur`, function(){
elem.innerHTML = textarea.value;
localStorage.setItem(`text`, textarea.value);
    });
});



/*
CWH CODE:

console.log('This is tutorial 25')

// Create a new element
let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val==null){
 text = document.createTextNode('This is my element. click to edit it');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


// Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first)

// add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});

*/
 
