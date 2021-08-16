// Library JS

// Constructor
function Book(name,author,type)
{
    this.name = name;
    this.author = author;
    this.type = type;
}


// Display COntructor
function Display()
{

}

// Add methods to display prototype

// Adding The Book
Display.prototype.add = function(book){
    console.log(`Adding`);
    let tableBody = document.getElementById(`tableBody`);
    let uiString = `
                <tr>
                  <td>${book.name}</td>
                  <td>${book.author}</td>
                  <td>${book.type}</td>
                </tr> `;
                tableBody.innerHTML += uiString;  
}

// Clearing After Entering The Details
Display.prototype.clear = function(){
    libraryForm = document.getElementById(`libraryForm`);
libraryForm.reset()
}

// Validating 
Display.prototype.validate = function(book){

    if (book.name.length<2 || book.author.length<2){
        return false;
    } 
    else
    {
        return true;
    }
}

// Show Function

Display.prototype.show = function(type, showMessage){
 let message = document.getElementById(`message`);
 message.innerHTML = `
                    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>Message: </strong> ${showMessage}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;

                    setTimeout(() => {
                        message.innerHTML = ``;
                    }, 5000);

}
 
// Add submit event listener to libraryForm

let libraryForm = document.getElementById(`libraryForm`);
libraryForm.addEventListener(`submit`, libraryFormSubmit);

function libraryFormSubmit(e)
{
    console.log(`You have submitted one book`);

    let name = document.getElementById(`book-name`).value;
    let author = document.getElementById(`author`).value;
    
    let fiction = document.getElementById(`fiction`);
    let technology = document.getElementById(`technology`);
    let cooking = document.getElementById(`cooking`);

    let type;

    if (fiction.checked) {
        type = fiction.value; 
    }
    
    else if (technology.checked) {
        type = technology.value; 
    }

    else if (cooking.checked) {
        type = cooking.value; 
    }

     let book = new Book(name, author, type);
     console.log(book);

    let display = new Display();
    if (display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show(`success`, ` Your Book Has Been Added`);
    }

    else
    {
        display.show(`error`, ` Your Book Has Not Been Added`);
    }
    e.preventDefault();

}
