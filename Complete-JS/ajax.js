let fetchBtn = document.getElementById(`fetchBtn`);
fetchBtn.addEventListener(`click`, buttonClickHandler);

function buttonClickHandler()
{
console.log(`You have clicked Fetch Data Button`);
    // Instantiate An xhr object

    const xhr = new XMLHttpRequest();
    
    // Open the object

    xhr.open(`GET`, `dharmil.txt`, true); // (get request or post request, the file name/file path, false/true)
    
    // xhr.open(`GET`, `dharmil.txt`, false);

    // what to do on progress
    xhr.onprogress = function(){
        console.log(`On Progress`);
    }

    // what to do when response is ready
    xhr.onload = function() {
        console.log(this.responseText);
        // document.write(this.responseText); // this will also work
    }

    // sending the request
    xhr.send();
}