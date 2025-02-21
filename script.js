//Access elements in timer
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timerForm = document.querySelector(".timerForm");

function totalTimeInMs(event) {
  event.preventDefault();

   // Hide the form and show the countdown display
   document.getElementById("setTime").style.display = "none";
   document.getElementById("displayTime").style.display = "block";

  //capture input data
  const hoursEntered = hours.value;
  const minutesEntered = minutes.value;
  const secondsEntered = seconds.value;
  //console.log(hoursEntered, minutesEntered, secondsEntered); //debugging
  //Get the total time ain milliseconds
  const totalHoursInMs = hoursEntered * 60 * 60 * 1000;
  const totalMinutesInMs = minutesEntered * 60 * 1000;
  const totalMs = secondsEntered * 1000;

  const totalTime = totalHoursInMs + totalMinutesInMs + totalMs;

  console.log(totalTime);

  startCountdown(totalTime);
}

function startCountdown(time) {
  const timerDisplay = document.querySelector(".timerDisplay h1");
  const timerMessage = document.getElementById("timerMessage");

  const countdown = setInterval(() => {
    if (time <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "00:00:00";
      timerMessage.textContent = "Your Time Is Up!";
      return;
    }

    //converting milliseconds back to hours, minutes and seconds
    let hoursLeft = Math.floor(time / (1000 * 60 * 60));
    let minutesLeft = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((time % (1000 * 60)) / 1000);

    // Format time display with leading zeros
    timerDisplay.textContent = `${String(hoursLeft).padStart(2, "0")}:${String(
      minutesLeft
    ).padStart(2, "0")}:${String(secondsLeft).padStart(2, "0")}`;

    time -= 1000;
  }, 1000);
}

timerForm.addEventListener("submit", totalTimeInMs);


