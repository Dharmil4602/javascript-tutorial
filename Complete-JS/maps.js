console.log(`Hello There`);

const myMap = new Map();
console.log(myMap);

const key1 = `myStr`,
      key2 = {},
      key3 = function(){};

myMap.set(key1, `This Is A String`);
myMap.set(key2, `This Is A Blank Object`);
myMap.set(key3, `This Is A Blank Function`);
console.log(myMap);

// Getting Values From The Map
let value = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);
console.log(value);
console.log(value2);
console.log(value3);

//Getting Size Of The Map
console.log(myMap.size);

// Using for of loop

for(let [key, value] of myMap)
{
    console.log(key, value);
}

// Get Only Keys

for(let key of myMap.keys())
{
    console.log(`Key Is` ,key)
}

// Get Only Values

for(let value of myMap.values())
{
    console.log(`Value Is` ,value)
}

myMap.forEach((value, key) => {
    console.log(`Key Is`, key);
    console.log(`Value Is`, value);
})

// Coverting Map To Array
let myArray = Array.from(myMap);
console.log(`Map To Array Is: `, myArray);

// Converting Map keys to array
let myArrayKeys = Array.from(myMap.keys());
console.log(`Map Keys To Array Is: `, myArrayKeys);

// Converting Map Values To Array
let myArrayValues = Array.from(myMap.values());
console.log(`Map Values To Array Is: `, myArrayValues);