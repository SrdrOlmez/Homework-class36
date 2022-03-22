'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const bodyParent = document.querySelector('body');
const timeDiv = document.createElement('div');
function addCurrentTime() {
  function time() {
    const date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();
    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }
    const currentTime = `${hour}:${min}:${sec}`;
    console.log(currentTime);
    return currentTime;
  }
  timeDiv.textContent = time();
}
bodyParent.appendChild(timeDiv);
window.addEventListener('load', addCurrentTime);
setInterval(addCurrentTime, 1000);
