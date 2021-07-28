// Suppose We Are Writing A Function As Below.

function greet() {
    console.log(`Hello There`);
}
greet();

// We Can Also Write The Same Function In SHorter Way: Using Arrows

let greet1 = () => {
    console.log(`Good Morning`);
}
greet1();

// Calculating Sum With Arrow Function

let sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 6));

// We Can Also Write The Very Same Summation Function Even In Shorter Way

let sum2 = (x, y) => x + y;
console.log(sum2(60, 60));

let half = n => n / 2; // Suppose n = 100
console.log(`The Half Of Given Number Is ` + half(100));

// Creating An Object And Using Function In It.

let obj = {
    greeting: `A Very Good Morning To All Of You And `,
    name: [`Dharmil`, `Harry`, `Shah`, `Birla`, `Tata`],
    speech() {
        this.name.forEach((stud) => {
            console.log(this.greeting + `Hello ` + stud); // Here The this written is pointing to the object i.e. obj

            // Here In The Below Code, this written is pointing to the local function s that we have created. This function that we have written will produce an error. i.e here greeting will be undefined
            // this.name.forEach(function s(stud) {
            //     console.log(this.greeting + `Hello ` + stud);
            });
        }
}
obj.speech();