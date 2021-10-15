console.log(`Hello`);

function* numberGen() // here * is representing the Generator
{
let i = 0;
// yield is keyword by default

yield 1;
yield 2;
yield 3;
yield 4;

// while(true)
// {
//     yield i++;
// }

}

const gen = numberGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());