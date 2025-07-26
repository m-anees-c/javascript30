
// car animation
// target all path elements describing the gusts of air around the race car
const paths = document.querySelectorAll('path.air');

/*
for each path update the --stroke-dash property to match the length of the stroke
! create another property for the negative offset (mostly due to Edge not liking the calc() function with custom properties)
! include also an increasing delay to animate the path in sequence
*/
// add an increasing delay to the animation
paths.forEach((path, index) => {
    const totalLength = path.getTotalLength();
    path.style.setProperty('--stroke-dash', totalLength);
    path.style.setProperty('--stroke-dash-negative', -totalLength);
    // ! as the first path actually describes a stroke on the left side of the car, tailor its delay to occur with the dashes on the left side
    if (index === 0) {
        path.style.animationDelay = `${0.08 * (paths.length - 2)}s`;
    } else {
        path.style.animationDelay = `${0.08 * index}s`;
    }
});


pressedKeys = [];
secretCode = ["ArrowLeft","ArrowUp","ArrowDown","ArrowRight" ];
window.addEventListener("keyup",(e) => {
    pressedKeys.push(e.key);
    // if pressedKeys array length greater than secretCode array length, remove first key 
    if(pressedKeys.length > secretCode.length) {
        pressedKeys.shift();
    }
    // if pressedkeys == secretCode , trigger function
    if(pressedKeys.toString() === secretCode.toString()){
        triggerEasterEgg();
    }
});

// easter egg function
function triggerEasterEgg(){
    const carContainer = document.getElementById('car-container');
    // Reset any previous animation
    carContainer.classList.remove('animate');

    carContainer.style.display = 'block';
    carContainer.classList.add('animate');

    // Remove after 5s (when animation ends)
    setTimeout(() => {
    carContainer.classList.remove('animate');
    carContainer.style.display = 'none';
    }, 5000);
}
