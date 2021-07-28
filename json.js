let jobj = {
    name: `Dharmil`,
    channel: `techyprogrammer`,
    friend: `Shah`,
    favourite: `Pizza`
}

console.log(jobj);

// Let Us Convert Above Object To JSONString

let mystr = JSON.stringify(jobj);
console.log(mystr);

// Changing The Word

mystr = mystr.replace(`Dharmil`, `Barmil`);
console.log(mystr);

// Converting The Above JSONString Format To Object

let toString = JSON.parse(mystr);
console.log(toString);