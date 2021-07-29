function time() {
    
    let date = new Date();
    // console.log(date);
    document.getElementById(`date-time`).innerHTML = date;
}
setInterval(time, 1000);

let otherDate = new Date(`8-4-2000 05:25:15`); // MM-DD-YYYY format
otherDate = new Date(`June 13 2001`);
console.log(otherDate);