const playSound = e => {
  const { keyCode } = e;
  const [ key, audio ] = document.querySelectorAll(`[data-key="${keyCode}"]`);
  if (!key) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

const removeTransition = e => {
	e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
	key.addEventListener('transitionend', removeTransition);
})

window.addEventListener('keydown', playSound);
