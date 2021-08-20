let fetchBtn = document.getElementById(`fetchBtn`);
fetchBtn.addEventListener(`click`, buttonClickHandler);

function buttonClickHandler() {
    console.log(`You have clicked Fetch Data Button`);
    // Instantiate An xhr object

    const xhr = new XMLHttpRequest();

    // Open the object

    // xhr.open(`GET`, `https://jsonplaceholder.typicode.com/todos/1`,true); // (get request or post request, the file name/file path, false/true)
    // xhr.open(`GET`, true); // (get request or post request, the file name/file path, false/true (When we wil set it to true it will perform Asynchronous code(it will not block the code) and if set to false it will perform SYNCHRONOUS code))

    // POST Request, in order to post some date we need to give some input in .send() by setting parameter.
    xhr.open(`POST`, `http://dummy.restapiexample.com/api/v1/create`, true);
    xhr.getResponseHeader(`Content-Type`, `application/json`);

    // xhr.open(`GET`, `https://jsonplaceholder.typicode.com/todos/1`, false);
    // xhr.open(`GET`, `dharmil.txt`, false);

    // what to do on progress
    xhr.onprogress = function () {
        // onprogress is used to show the progress or waiting
        console.log(`On Progress`);
    }

    xhr.onreadystatechange = function(){
        // console.log(`Ready State Is `, xhr.readyState);
        /*
        There are 5 types of readystate:
        0 -> UNSENT : client created, open() not yet called
        1 -> OPENED : open() has been called
        2 -> HEADERS_RECEIVED : send() has been called and headers and status are available
        3 -> LOADING : Downloading responseText() holds special data
        4 -> DONE : The operation is complete
         */
    }

    // what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {

            console.log(this.responseText);
        //    let obj =  JSON.parse(this.responseText);
        //    console.log(obj);
        }

        else
        {
            console.log(`Some Error Occured.`);
        }
        // document.write(this.responseText); // this will also work
    }

    // sending the request
    let param = `{"name":"DummyText","salary":"123","age":"23"}`;
    xhr.send(param);

    console.log(`We Are Done!`); 

    
}

// Populate

let popBtn = document.getElementById(`popBtn`);
popBtn.addEventListener(`click`, popHandler);


function popHandler(){
    console.log(`You have clicked Populate`);
    // Instantiate An xhr object

    const xhr = new XMLHttpRequest();

    // Open the object

    xhr.open(`GET`, `https://dummy.restapiexample.com/api/v1/employees`,true); // (get request or post request, the file name/file path, false/true)
    // xhr.open(`GET`, true); // (get request or post request, the file name/file path, false/true (When we wil set it to true it will perform Asynchronous code(it will not block the code) and if set to false it will perform SYNCHRONOUS code))


    // what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {

           let obj =  JSON.parse(this.responseText);
           console.log(obj);

           let list = document.getElementById(`list`);
           str = "";
           for (key in obj)
           {
                str += `<li>${obj[key].employee_age}</li>`
           }
           list.innerHTML = str;
        }

        else
        {
            console.log(`Some Error Occured.`);
        }
    }

    // sending the request
    let param = `{"name":"DummyText","salary":"123","age":"23"}`;
    xhr.send(param);

    console.log(`We Are Done Fetching Employee!`);        
}