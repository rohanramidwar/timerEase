// prompt("ENTER START VALUE: ")
const startTime = 10;
let time = startTime * 60;

const countdownEl = document.getElementById("countdown");
setInterval(updateCountdown,1000);

function restart()
{
    time = startTime * 60;
}

function updateCountdown()
{
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = (seconds<10) ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}
