
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
		toggle.textContent = "❚❚";
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
/*
TL;DR — Cypress Looks For:
HTML elements and classes/IDs

States of elements (visible, enabled, paused, etc.)

User actions (clicks, inputs, etc.)

Assertions to validate behavior

Network/API behavior if needed

Cypress is a front-end testing framework that simulates user behavior in the browser and checks if your app behaves correctly. It focuses mainly on:

1. 🔍 DOM Elements
Cypress looks for elements in the HTML DOM — just like how a user would interact with a webpage.

Example:

js
Copy
Edit
cy.get('.player__video') // Looks for an element with class 'player__video'
If the element isn’t in the DOM (or not visible), it will fail.

2. 🕐 Timing & State
Cypress waits for elements to appear (by default up to 4 seconds), and checks their state.

It checks things like:

Is the element visible?

Does it have the correct text or value?

Is the element enabled or disabled?

Is the video playing or paused?

Example:

js
Copy
Edit
cy.get('.toggle').should('contain.text', '►')
3. ⚙️ User Interactions
Cypress tests how users interact with the UI:

Clicking buttons

Typing in inputs

Drag/drop, hovering, submitting forms

Changing volume, seeking video, etc.

Example:

js
Copy
Edit
cy.get('.rewind').click() // Simulates user clicking rewind
4. 📸 Assertions
It asserts that something is true after an action.

Example:

js
Copy
Edit
cy.get('video').should('have.prop', 'paused', true)
This checks if the video is paused.

5. 🌍 Page Navigation
It also checks:

URLs

Routes (SPA navigation)

Network requests (can intercept API calls)

*/

