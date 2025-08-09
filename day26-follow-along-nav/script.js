const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('nav');

function handleEnter(){
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),100);

    background.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();

    background.style.width = `${dropdownCoords.width}px`;
    background.style.height = `${dropdownCoords.height}px`;
    background.style.left = `${dropdownCoords.left}px`;
    background.style.top = `${dropdownCoords.top - nav.getBoundingClientRect().top}px`;

}
function handleLeave(){
    this.classList.remove('trigger-enter','trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));
