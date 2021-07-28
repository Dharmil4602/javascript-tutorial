// Arrays

let marks = [1, 2, 3, 4, 5, 10];
const fruits = [`Orange`, `Apple`, `Guava`, `Banana`, `PineApple`, `Watermelon`];
const mixed = [`str`, 85, [3, 10]];

const arr = new Array(23, 50, 100, 'Hey There');

console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(arr);

// To find whether the given array is array or not:

console.log(Array.isArray(arr));

marks.push(35); // .push will be adding element at the end of list.

marks.unshift(20); // .unshift will be adding element at the starting of list.

console.log(marks);

marks.pop(); // .pop will be removing element from the end of list.
console.log(marks);
marks.shift(); // .shift will be removing element from the starting of list.
console.log(marks);

marks.splice(1,3); // .splice will be removing the elements starting from position 1. but not including position 1. .splice(x,y) , x is not included.

console.log(marks);

marks.reverse(); // .reverse will be reversing the array.
console.log(marks);

// Concatination Of Two Arrays

let marks2 = [200, 300, 400, 500, 600];
marks = marks.concat(marks2);
console.log(marks);

// Creating An Object:

let obj = {
    name: `Dharmil Shah`,
    profession: `Student`,
    year: `3rd`,
    grade: [`A`, `B`, `C`, `D`]
}

console.log(obj);