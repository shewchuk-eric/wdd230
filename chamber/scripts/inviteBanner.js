/******************************
* Manage the Invitation Modal *
******************************/

const modal = document.querySelector('#myModal');
const span = document.querySelector('#close');

// If the day is Monday to Wednesday then display the modal
const d = new Date();
let day = d.getDay();
if(day > 0 && day < 4) {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}