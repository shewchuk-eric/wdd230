
// display the current date to the page
const options = {
    year: "numeric"
};
const today = document.querySelector('#date').innerHTML = new Date().toLocaleDateString("en-US", options);


// display the date of last modification to the page
document.querySelector('#modified').innerHTML = `${document.lastModified}`;


// code for responsive nav menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


// code to toggle dark mode
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const html = document.querySelector("html");
const h2 = document.querySelectorAll("h2");
const spotlight = document.querySelectorAll(".spotlight a");
const a = document.querySelectorAll("a");
const cta = document.querySelector(".cta a");
const active = document.querySelector(".active");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Use Dark Mode")) {
		body.style.background = "#353535";
		body.style.color = "#d9d9d9";
		html.style.background = "#000";
		for (let i=0; i<h2.length; i++) {
			h2[i].style.color = "#68bcc1";
		}
		for (let i=0; i<a.length; i++) {
			a[i].style.color = "#b0ebef";
		}
		modeButton.textContent = "Use Light Mode";
	} else {
		body.style.background = "white";
		body.style.color = "#353535";
		html.style.background = "#353535";
		for (let i=0; i<h2.length; i++) {
			h2[i].style.color = "#284b63";
		}
		for (let i=0; i<a.length; i++) {
			a[i].style.color = "#d9d9d9";
		}
		for (let i=0; i<spotlight.length; i++) {
			spotlight[i].style.color = "#3c6e71";
		}
		cta.style.color = "#d9d9d9";
		active.style.color = "#d9d9d9";
		modeButton.textContent = "Use Dark Mode";
	}
});