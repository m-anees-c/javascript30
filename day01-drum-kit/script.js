  //function for sound play
  function playSound(keyCode) {
    let sound = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!sound) return;
    let key = document.querySelector(`div[data-key="${keyCode}"]`);
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
  }
  // remove transition when sound end
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  // play sound when key press
  window.addEventListener('keydown', (e) => playSound(e.keyCode));
  // play sound when click
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  keys.forEach(key => key.addEventListener('click', function() {
    playSound(key.dataset.key);
  }))
