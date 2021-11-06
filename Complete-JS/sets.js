console.log(`This Is Tutorial`);

// Set stores unique values
const mySet = new Set(); // Initialize An Empty Set

console.log(`The Set Looks Like This: `, mySet);

// Adding values to set
mySet.add(`this`);
mySet.add(`My Name`);
mySet.add(50);
mySet.add(true);
mySet.add(false);
mySet.add(`My Name`); // Elements Are Not Repeated In Set, No matter how many times you repeat the element it will be only shown once in the Set
console.log(`Before Removal: `,mySet);
console.log(mySet.size);
console.log(mySet.has(50)); // .has is used to check whether the given value is present in the set or not

mySet.delete(`this`); // .delete() removes an element from the set
console.log(`After Removal: `, mySet);

// let mySet1 = new Set([1, 45, `this`, false, `helllo There`]);
// console.log(`This Set Is Created Using Set Constructor: `,mySet1);


// Iterating A Set
// using for of loop
for (let item of mySet) {
    console.log(`Using For Of Loop Item Is: `, item);
}

console.log(" ");

// using foreach loop
mySet.forEach((item1)=>{
    console.log(`Using For Each Loop Item Is: `, item1);
})