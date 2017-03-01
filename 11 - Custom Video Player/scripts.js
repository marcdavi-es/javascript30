const video = document.getElementsByClassName('viewer')[0],
			progress = document.getElementsByClassName('progress')[0],
			progressFilled = document.getElementsByClassName('progress__filled')[0],
			toggleButton = document.getElementsByClassName('toggle')[0],
			sliders = document.querySelectorAll('input[type=range]'),
			skipButtons = document.querySelectorAll('[data-skip]'),
			fullscreenButton = document.getElementsByClassName('fullscreen')[0];

function togglePlay () {
	video.paused ? video.play() : video.pause();
}

function updateButton () {
	toggleButton.innerHTML = video.paused ? '►' : '❚ ❚';	
}

function updateProgress () {
	progressFilled.style.width = progressFilled.style.flexBasis = `${this.currentTime/this.duration*100}%`;
}

function scrub (e) {
	video.currentTime = video.duration*e.offsetX/parseInt(window.getComputedStyle(progress).width, 10);
}

function updateRange () {
	video[this.name] = this.value;
}

function skip (e) {
	video.currentTime += +this.dataset.skip;
}

function requestFullscreen () {
	video.webkitRequestFullscreen();
}

console.dir(video);

window.addEventListener('keydown', e => {if (e.keyCode === 32) togglePlay()});
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);
toggleButton.addEventListener('click', togglePlay);
sliders.forEach(slider => slider.addEventListener('input', updateRange));
skipButtons.forEach(button => button.addEventListener('click', skip));
fullscreenButton.addEventListener('click', requestFullscreen);
