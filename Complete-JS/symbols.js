// We use symbol to generate new primitive

// Symbol is not an object, it is a primitive

// Symbol is not a constructor so we are not using new infornt of Symbol(). Symbol is not a constructor

// If two symbols are equal than also it will return false which is a feature of Symbol.

const sym1 = Symbol(`My Identifier`);
const sym2 = Symbol(`My Identifier`);
console.log(sym1 === sym2);

const k1 = Symbol(`For k1`);
const k2 = Symbol(`For k2`);

myObj = {
    name: `Testing`
};
myObj[k1] = `Dharmil`;
myObj[k2] = `Shah`;

console.log(myObj);

// In for in loop, Symbols are ignored

for(key in myObj)
{
    console.log(key, myObj[key]);
}