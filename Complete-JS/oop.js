console.log(`Hello There`);

// Object Literal For Creating Objects
let car = {
    name: `Maruti`,
    topSpeed: 89,
    run: function () {
        console.log(`Car is Running`);
    }
}

console.log(car);

// Creating Constructor For Car

function generalCar(nameofcar, speedofcar) {
    this.name = nameofcar;
    this.topSpeed = speedofcar;
    this.run = function () {
        console.log(this.name + " is running");
    }
}

car1 = new generalCar(`Audi`, 90);
car2 = new generalCar(`Mercedez`, 200);
car3 = new generalCar(`Tata Harrier`, 180);
car4 = new generalCar(`Lamborghini`, 230);
console.log(car1, car2, car3, car4);