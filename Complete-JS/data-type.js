// Primitive Data Types:

// String
 
let name = `Dharmil`;
console.log(`My Name Is ` + name);

// To Find The Datatype Of Particular Variable Declared We Can Use typeof operator.

console.log(`The Data Type Is ` + (typeof name));

// Numbers/Integers

let marks = 34;
let mark = `34`;
console.log(marks);
console.log(`The Data Type Is ` + (typeof marks));
console.log(mark);
console.log(`The Data Type Of mark Variable Is ` + (typeof mark));

// Boolean

let driver = true;
console.log(`Data Type: ` + (typeof driver));

// null

let nullvar = null;
console.log(`The Data Type Is: ` + (typeof nullvar)); // Data type of null is bogas, i.e. it returns as an object


// Reference Data Types/ Non-Primitive Data Types:

// Arrays

let myarr = [1, 2, 3, 4, false, `hello`];
console.log(`Data Type: ` + (typeof myarr));

// Object Literals

let stmarks = {
    Dharmil: 90,
    Shubham: 85,
    Rahul: `Failed`
}
console.table(stmarks);
console.log(stmarks);
console.log(`Data Type Of stmarks is: ` + (typeof stmarks));

// Function

function findName() {
    
}
console.log(`Data Type Of Function Is: ` + (typeof findName));