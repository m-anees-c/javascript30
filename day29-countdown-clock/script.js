const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');



let countdown;
function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    clearInterval(countdown);
    countdown = setInterval(() => {

        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    },1000)
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    const display = `${minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();

    endTime.textContent = `Ends At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' + minutes : minutes}`
}

function startTimer(){
    const seconds = this.dataset.time;
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click',startTimer));

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    timer(this.minutes.value * 60);
})