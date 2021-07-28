// setTimeout --> allows us to run a function once after interval of time

// clearTimeout --> allows us to run a function repeatedly after interval of time

function greet(salutation, name) {
    console.log(`Hello Good Morning ` + salutation + " " + name);
}

// greet();

// inside the setTimeout parenthesis, you have to write only function name not the parenthesis.
// setTimeout(greet, 5000, `Dear`, `Dharmil`);
let timeOut = setTimeout(greet, 5000, `Dear`, `Dharmil`);
console.log(timeOut);

// clearTimeout terminates the setTimeout.
clearTimeout(timeOut);


function greet1(name, repition) {
    console.log(`Hello Good Morning ` + name + " " + repition);
}

// setInterval(greet1, 1000, `Dharmil`, `This will be repeated at every 1 second of interval`);
let interval = setInterval(greet1, 1000, `Dharmil`, `This will be repeated at every 1 second of interval`);
// clearInterval terminates the setInterval
clearInterval(interval);

// Time

function displayTime()
{
    let time = new Date();
    console.log(time);
    document.getElementById(`time`).innerHTML = time; // Here we have written innerHTML because we are editing in browser code with javascript.
    
}
setInterval(displayTime, 1000);

