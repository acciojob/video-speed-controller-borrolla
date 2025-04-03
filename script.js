
const video = document.querySelector(".flex");
const toggle = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector(".playbackSpeed");
const rewind = document.querySelector(".rewind");
const forward = document.querySelector(".forward");
const speedBar = document.querySelector(".speed-bar");


function togglePlay(){
	if(video.paused){
		video.play();
		toggle.textContent = "❚ ❚";
	}else{
		video.pause();
		toggle.textContent = "►";
	}
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("play", () => toggle.textContent = "❚ ❚");
video.addEventListener("pause", () => toggle.textContent = "►");

function updateProgress(){
	const percentage = (video.currentTime / video.duration) * 100;
	progress.value = percentage;
}

video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", (e) => {
    video.currentTime = (e.target.value / 100) * video.duration;
});

volume.addEventListener("input", (e) => {
	video.volume = e.target.value;
});

playbackSpeed.addEventListener("input", (e) => {
	video.playbackRate = e.target.value;
	speedBar.textContent = e.target.value +  "x";
});

rewind.addEventListener("click", () => {
	video.currentTime = Math.max(0, video.currentTime - 10);
});

forward.addEventListener("click", () => {
    video.currentTime = Math.min(video.duration, video.currentTime + 25);
});

const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


