const alarmSubmit = document.getElementById(`alarm-submit`);
alarmSubmit.addEventListener(`click`, setAlarm);

var audio = new Audio(`http://www.pachd.com/sfx/alarm_ringing_1.wav`);

// Function To Play The Alarm
function ringBell()
{
    audio.play();
}

// Function To Set Alarm
function setAlarm(e)
{
    e.preventDefault();
    
    const alarm = document.getElementById(`alarm`);
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm ${alarmDate}....`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm>=0) {
        setTimeout(() =>{
            console.log(`Ringing Now`);
            ringBell();
        }, timeToAlarm);
    }
    
}