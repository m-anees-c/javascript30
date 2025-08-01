const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 50 ;

hero.addEventListener("mousemove", shadow);

function shadow(e){
    const {offsetWidth: width , offsetHeight: height} = hero ;
    let {offsetX: x , offsetY: y} = e ;

    if ( e.target !== this){
        x += e.target.offsetLeft;
        y += e.target.offsetTop ;
    }       

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 10px red
    `;

}