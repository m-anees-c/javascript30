const slider = document.querySelector('.items');
let startX;
let scrollLeft;
let isDown = false;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
})

slider.addEventListener('mouseup', () => {
    isDown = false;
})

slider.addEventListener('mouseleave', () => {
    isDown = false;
})

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    let x = e.pageX - slider.offsetLeft;
    let walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
})