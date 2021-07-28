// For Loops (for, forEach, forof, forin)

let friends = [`Dharmil`, `Khushi`, `Souravi`, `Karan`, `Nishil`];
// for (let index = 0; index < friends.length; index++)
// {
//     console.log(`Hello ` + friends[index]);
// }

// The above example can also be executed by forEach loop

// friends.forEach(function a(element){
// console.log(`Hello ` + element);
// });

// The above example can also be executed by forof loop

for (element of friends) {
    console.log(`Hello ` + element)
}

// For in loop is used to iterate over objects

let employee = {
    name: `Dharmil`,
    salary: 200000,
    profession: `Student`
}

for ( key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`); 
    }

    // While Loop

    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }

    // Do While Loop

    let n = 100;
    do {
        console.log(`Do While Loop Will Be Executed At Least Once, No Matter What's The Condition Given. As In This Case ${n} is less then the condition given though it will be executed once`);
        console.log(n);
        n++;
    } while (n < 10);