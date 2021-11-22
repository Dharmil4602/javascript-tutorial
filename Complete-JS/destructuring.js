let a,b;
[a,b] = [1,222];
console.log(a,b);

// In below one, after e we have written three dots(...) which means whatever value comes after e will be stored in f in the form of array
[c,d,e,...f] = [2,3,5,8,9,8,4,20,4,94,06,19,]
console.log(c,d,e,f);

({f,g,h} = {f:34, g:50, h:60})
console.log(f,g,h);

const fruits = ['Apple', 'Banana', 'Mangoes', 'Pineapple'];
[a,b,c] = fruits;
// console.log(fruits);
console.log(a,b,c);

//Object Destructuring

const laptop = {
    model: 'Asus TUF F15 Gaming',
    age: '20',
    gender: 'Robot',
    networth: '255',
    start: function(){
        console.log(`Function Started`);
    }
}

let {model, age, gender, start} = laptop;
console.log(model, age, gender, start);
start();