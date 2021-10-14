console.log(`Hello`);

function fruits(array) {
    let nextIndex = 0;
    return {
        // here next: is the method in javascript
        next: function () {
            if (nextIndex < array.length) {
                return {
                    value: array[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
const myArray = [`Apple`, `Grapes`, `Oranges`, `Guava`];
console.log(myArray);
const fruit = fruits(myArray);
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());