/****************************
* Date Management Functions *
****************************/

// display the current date to the page
const options = {
    year: "numeric"
};
const today = document.querySelector('#date').innerHTML = new Date().toLocaleDateString("en-US", options);
// display the date of last modification to the page
document.querySelector('#modified').innerHTML = `${document.lastModified}`;


/**********************************
* Navigation Management Functions *
**********************************/

// code for responsive nav menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


/*************************************
* Local Storage Management Functions *
*************************************/

const visitors = document.querySelector('#visits'); // access span for visits count

// check for existence of local storage values
let visitsCounter = Number(window.localStorage.getItem('myVisitorCount')) || 0; // gets value of 'myVisitorCount' and sets it to zero if it doesn't exist already
if (visitsCounter !==0) {
	visitors.textContent = visitsCounter; // visitor has been to page before so show the count
} else {
	visitors.textContent = 'Welcome to The Clever Primate'; // first-time visitor so show welcome message
}
visitsCounter ++; // add one to counter

// set visitor count value to local storage
localStorage.setItem('myVisitorCount', visitsCounter);
