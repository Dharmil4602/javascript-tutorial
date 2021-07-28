function greet(x) {
    console.log(`Hello There Hope You Are Doing Good, ` + x);
}

let name1 = `Dharmil`;
greet(name1);

let obj = {
    name: `Dharmil`,
    profession: function () {
        return `Student`;
    }
}

console.log(obj.profession());
console.log(obj.name);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function(element){
     console.log(element);
});

let sum = (a,b) => {
    return a + b;
}

console.log(`Summation Is: ` + sum(2, 6));