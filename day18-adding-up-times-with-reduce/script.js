
const timesNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timesNodes
    .map(timeNode => timeNode.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, videoSeconds) => total += videoSeconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);

secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);

secondsLeft = secondsLeft % 60 ;

console.log(`Total : ${hours}:${minutes}:${secondsLeft}`);

