const display = document.getElementById('clock');
const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeOut = null;

function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    display.innerText = `${hours} : ${mins} : ${secs}`;
}

function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value) {
    alarmTime = value;
    console.log(alarmTime);
}

function setAlarm() {
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeOut = setTimeout(() => audio.play(), timeout);
            alert('Alarm Set');
        }
    }
}


function clearAlarm() {
    audio.pause();
    if (alarmTimeOut) {
        clearTimeout(alarmTimeOut);
        alert('Alarm Cleared');
    }
}

setInterval(updateTime, 1000);