var secRemaining=180;
var minutes=secRemaining/60;
var seconds=secRemaining%60;

setInterval(timer(secRemaining),1000);

console.log(minutes);
console.log(seconds);
