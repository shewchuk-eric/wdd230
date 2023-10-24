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

// check for existence of local values


// convert data into JSON