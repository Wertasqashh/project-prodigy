let count = 0;
let intervalId = null;

const timer = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const lapButton = document.querySelector('#lap');
const lapsList = document.querySelector('#laps');

startButton.addEventListener('click', () => {
    intervalId = setInterval(() => {
        count += 1;
        const seconds = Math.floor(count % 60).toString().padStart(2, '0');
        const minutes = Math.floor((count / 60) % 60).toString().padStart(2, '0');
        const hours = Math.floor((count / 3600) % 24).toString().padStart(2, '0');
        timer.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    count = 0;
    timer.textContent = '00:00:00';
    lapsList.innerHTML = '';  // clear laps!
});

lapButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = timer.textContent;
    lapsList.appendChild(li);
});

