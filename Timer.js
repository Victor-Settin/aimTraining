const txtTimer = jQuery("#timer");
let intervalTimer;
let time = 0;
function startTimer() {
    if (intervalTimer) {
        clearInterval(intervalTimer);
        time = 0;
    }
    intervalTimer = setInterval(function () {
        time++;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        let formattedMinutes = ("00" + minutes).slice(-2);
        let formattedSeconds = ("00" + seconds).slice(-2);
        let formattedTime = formattedMinutes + ":" + formattedSeconds;
        txtTimer.text(formattedTime);
    }, 1000);
}
