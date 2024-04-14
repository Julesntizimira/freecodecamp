const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0
let hours = 0;

let timeInterval = null;
let timerStatus = "stopped";

function StopWatch () {
    seconds++;
    if (seconds/60 === 1) {
        minutes++;
        seconds = 0;
    }
    if (minutes/60 === 1) {
        minutes = 0;
        hours++;
    }
    if (seconds < 10) {
        seconds0 = "0" + seconds; 
    } else {
        seconds0 = seconds;
    } 
    if (minutes < 10) {
        minutes0 = "0" + minutes; 
    } else {
        minutes0 = minutes;
    } 
    if (hours < 10) {
        hours0 = "0" + hours; 
    } else {
        hours0 = hours;
    } 
    document.getElementById('timer').innerText = hours0 +  ":" + minutes0 + ":" + seconds0;
}
// window.setInterval(StopWatch, 1000);

startStopBtn.addEventListener("click", function () {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(StopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause">pause</i>`;
        timerStatus = "started"
    } else {
        window.clearInterval(timerInterval); 
        document.getElementById('startStopBtn').innerHTML =  `<i class="fa-solid fa-play" id="play">play</i>`;
        timerStatus = "stopped";

    }
})
resetBtn.addEventListener("click", function () {
    window.clearInterval(timerInterval); 
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00"
})