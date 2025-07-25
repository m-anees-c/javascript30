const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const sliders = player.querySelectorAll('.player__slider');
const playerButtons = player.querySelectorAll('[data-skip]');
const togglebutton = player.querySelector('.toggle');
const fullScreenButton = player.querySelector('.full-screen');

// function to play / pause video
function togglePlay(){
    const method = video.paused ? 'play' : 'pause' ;
    video[method]();
}

// function to update play / pause button
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    togglebutton.textContent = icon;
}

// function to skip video
function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

// function to update volum / speed
function handleRangeUpdate(){
    video[this.name] = this.value;
}

// function to update progress bar
function handleProgress(){
    const percent = ( video.currentTime / video.duration ) * 100 ;
    progressBar.style.flexBasis = `${percent}%`;
}

// function to update video on scrub
function scrub(e){
    console.log(e.offsetX);
    console.log(progress.offsetWidth);
    scrubTime =(e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// function to make video full screen
function fullScreen(){
    video.requestFullscreen();
}

video.addEventListener("click",togglePlay);
video.addEventListener("play",updateButton);
video.addEventListener("pause",updateButton);
video.addEventListener("timeupdate", handleProgress);

playerButtons.forEach(button => {
    button.addEventListener("click",skip); 
})

sliders.forEach(slider => {
    slider.addEventListener("input",handleRangeUpdate);
})

let mousedown = false;
progress.addEventListener("click",scrub);
progress.addEventListener("mousedown",() => mousedown = true);
progress.addEventListener("mouseup",() => mousedown = false); 
progress.addEventListener("mousemove",(e) => mousedown && scrub(e));

fullScreenButton.addEventListener("click",fullScreen);