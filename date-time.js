let now = new Date();
console.log(now);
document.getElementById(`date`).innerHTML = now;

// Below one is the format in which we can give the particular date according to year, month, etc

// let newDate = new Date(Year, Month, Date, Hours, Minutes, Seconds, Miliseconds);

// function display()
// {

//     let newDate = new Date(3020, 0, 3, 5, 30, 5);
//     console.log(newDate);
//     document.getElementById(`newDate`).innerHTML = newDate;
// }
// setInterval(display, 1000);

// Below Method Is For Obtaining Particular Year Or Day Or Month, etc

let newDate1 = new Date(3020, 0, 3, 5, 30, 5);

let yr = newDate1.getFullYear();
console.log(`The Year Is: ` + yr);

let dt = newDate1.getDate();
console.log(`The Date Is: ` + dt);

let det = newDate1.getUTCDate();
console.log(det);

// We Can Also Set The Particular Date, Time As Well.

newDate1.setDate(10);
console.log(newDate1);
newDate1.setMinutes(47);
console.log(newDate1);
