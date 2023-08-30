let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
}

function updateTimerDisplay() {
    document.getElementById("time").textContent = formatTime(elapsedTime);
}

function startPauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
    } else {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function () {
            elapsedTime = Date.now() - startTime;
            updateTimerDisplay();
        }, 1000);
    }
    isRunning = !isRunning;
    document.getElementById("startPause").textContent = isRunning
        ? "Pause"
        : "Resume";
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateTimerDisplay();
    isRunning = false;
    document.getElementById("startPause").textContent = "Start";
}

document
    .getElementById("startPause")
    .addEventListener("click", startPauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

// Initial call to display the initial time
updateTimerDisplay();
