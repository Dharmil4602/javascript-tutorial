document.write(`Hello There`);

// for (let index = 0; index < 45; index++) {
//     const element = index;
//     console.log(`This is index number: ` + index);
// }

setInterval(() => {
    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log(`This is index number: ` + index);
    }
}, 5000); // In this interval, after every 5s console will be printed.

console.log(`Done Printing`); // This will be printed first while the above one in setinterval will be printed later