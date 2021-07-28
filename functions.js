console.log(`Hello I Have Connected External Js File`);

function greet(x, greetText = `Greetings From JavaScripts`)
{
    console.log(greetText + " " + x + `, You Are Very Talented`);
}

function sum(a, b, c)
{
    let d = a + b + c;
    return d;
}
let name0 = `Dharmil`;
let name1 = `Saurabh`;
let name2 = `Souravi`;
let name3 = `Khushi`;

let greetText = `Good Morning`
greet(name0, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3); // Here we have not declared the greetText, so by default the function's greetText will be applicable

let s = sum(2, 5, 3);
console.log(s);