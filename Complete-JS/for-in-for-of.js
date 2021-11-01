console.log(`Hey There`);

people = ["Dharmil", "Rohan", "Shubham", "Vikrant", "Messi"];

for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
}

let obj = {
    name: "Dharmil",
    languages: "Python",
    hobbies: "Web Development"
}

// console.log(obj);
// console.log(obj.name);
// console.log(obj.languages);
// console.log(obj.hobbies);

// Iterating An Object with for in loop

for (let key in obj)
[
    console.log(obj[key]),
]

let mySting = "This Is My String";

for (let char in mySting)
{
    console.log(mySting[char]);
}

// for of loop

for(let name of people)
{
    console.log(name);
}

