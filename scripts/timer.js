let nintervalId;

let startTime = 10;
let time = startTime * 60;

const countdownEl = document.getElementById("countdown");

var playDisplayP = document.getElementById("play-id");
var pauseDisplayP = document.getElementById("pause-id");

function restartTimer()
{
    time = startTime * 60;
    playTimer();
}

function setTimer()
{
    startTime = prompt("NET");
    time = startTime * 60;
    currentTime();
    playTimer();
}

function playTimer()
{
    playDisplayP.style.display = "none";
    pauseDisplayP.style.display = "block";
    add_interval();
}

function pauseTimer()
{
    clear_interval();
    currentTime();
    playDisplayP.style.display = "block";
    pauseDisplayP.style.display = "none";
}

function add_interval()
{
    if(!nintervalId)
    {
        nintervalId = setInterval(updateCountdown,1000);
    }
}

function clear_interval()
{
    clearInterval(nintervalId);
    nintervalId = null;
}

function updateCountdown()
{
    currentTime();
    time--;
}

function currentTime()
{
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = (seconds<10) ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
}

