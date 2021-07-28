// Type Conversion:

// Converting One DatA Type Into Another

let apvar = 50;
console.log(apvar + `The Data Type Of ${apvar} before conversion is: ` + (typeof apvar));

// Here Number Is Converted To String Data Type
apvar = String(50);
console.log(apvar + `The Data Type Of ${apvar} after conversion is: ` + (typeof apvar));

let num = 2;
console.log(num); // Normal Number Will Be Printed In Blue Color
console.log(num.toString()); // Number Converted To String Will Be Printed In Black Color


// Here String Is Converted To Number Data Type.
let str = `2345`;
console.log(str + `The Data Type Before Conversion Is: ` + (typeof str));

let str1 = Number(`2345`);
console.log(str + `The Data Type After Conversion Is: ` + (typeof str1));

// Floating And Normal Integer

let number = parseInt(`34.56`);
console.log(number, (typeof number));

let number1 = parseFloat(`35.024`);
console.log(number1, (typeof number1));

let n2 = parseFloat(`25.36`);
console.log(n2.toFixed(5), (typeof n2)); // toFixed is used to set how many values we want after decimal


// Type Coercion

let mystr = `698`;
let mynum = 50;

console.log(mystr + mynum); // Here Number Is By Default Converted To String And It Gets Concatinated