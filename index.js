const start = document.getElementById("start");
const reset = document.getElementById("reset");
const second = document.getElementById("second");

let interval = 0;

let seconds = 0;
let mins = 0;

start.addEventListener("click", () => {
  if (start.innerText === "Start") {
    start.innerText = "Stop";
    interval = setInterval(() => {
      seconds += 1;
      if (seconds === 60) {
        mins += 1;
        seconds = 0;
      }
      const secondsText = seconds < 10 ? "0" + seconds : seconds;
      const minutesText = mins < 10 ? "0" + mins : mins;
      second.innerText = `${minutesText}:${secondsText}`;
    }, 1000);
  }
  else {
    start.innerText = 'Start';
    clearInterval(interval);
  }
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  start.innerText = "Start";
  seconds = mins = 0;
  second.innerText = "0:00";
});
