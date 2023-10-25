// code to handle the welcome message in the sidebar on the discover page

const message = document.querySelector('#welcome'); // get reference to the <span>
const msToDays = 84600000; // use for calculating elapsed days since last visit
const rightNow = new Date();
let thisVisit = rightNow.getMilliseconds();

let elapsed = Number(window.localStorage.getItem('lastVisit')) || 0; // gets value of 'lastVisit' and sets it to zero if it doesn't exist already
if (elapsed !==0) {
    let elapsedDays = (thisVisit - elapsed) / msToDays;
    if (elapsedDays < 1) {
        message.textContent = "Back so soon? Awesome!";	
    } else if (elapsedDays > 1 && elapsedDays < 2) {
        message.textContent = "it's been a day since your last visit.  Welcome back!";
    } else {
        message.textContent = `It has been ${elapsedDays.toFixed(0)} days since your last visit.  We're glad you're back!`;}
}

localStorage.setItem('lastVisit', thisVisit);


