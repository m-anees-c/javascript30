const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');


  let lastHole;
  let timeOut = false;
  let peepLoop;
  let gameLoop;

  let score = 0;
  function randomTime(min,max){
    const time = Math.round(Math.random() * (max - min) + min);
    return time;
  }

  function randomHole(holes){
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep(){
    const time = randomTime(300,1500);
    const hole = randomHole(holes);
    hole.classList.add('up');
    peepLoop = setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeOut) peep();
    },time);
  }

  function startGame(){
    clearTimeout(peepLoop);
    clearTimeout(gameLoop);
    holes.forEach(hole => hole.classList.remove('up'));
    scoreBoard.textContent = 0;
    timeOut = false;
    score = 0;
    peep();
    gameLoop = setTimeout(() => timeOut = true , 10000);
  }

  function bonk(e){
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }
  moles.forEach(mole => mole.addEventListener('click',bonk));