// let date = new Date();
// document.write(date);

function updateClock()
{
    // Getting Current Date
    let currentTime = new Date();

    // Extracting hour,minute,second from the date
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    // Pad 0 if minute or second is less than 10
    currentHour = (currentHour < 10 ? `0` : "") + currentHour;
    currentMinute = (currentMinute < 10 ? `0` : "") + currentMinute;
    currentSecond = (currentSecond < 10 ? `0` : "") + currentSecond;
    currentHour = (currentHour > 12 ? currentHour - 12 : currentHour);

    // Choose AM/PM as per the time of day
    let timeOfDay = (currentHour < 12 ) ? "AM": "PM";

    // Preparing the format of the time string i.e how does the clock format looks
    let currentTimeStr = currentHour + ":" + currentMinute + ":" + currentSecond + " " + timeOfDay;
    document.getElementById(`time`).innerHTML = currentTimeStr;
}

onload = 'updateClock()';
setInterval('updateClock()', 1000);