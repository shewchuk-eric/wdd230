const vehicle = document.querySelector('#vehicleSelect'); // value for selected vehicle
const checkBox = document.querySelector('#cruise'); // checkbox for 'arriving on a cruise ship'
const lineLabel = document.querySelector('#lineLabel'); // label for cruise line input
const line = document.querySelector('#line'); // input box to display when checkBox is checked
const button = document.querySelector('#showMessage');
const message = document.querySelector('#submission');

checkBox.addEventListener('change', () => { // display input for cruise line if checkbox is checked
    if (checkBox.checked == true){
        lineLabel.style.display = "inline";
        line.style.display = "inline";
    } else {
        lineLabel.style.display = "none";
        line.style.display = "none";
    }
});

button.addEventListener('click', () => {
    message.textContent = `Thank you for choosing Scoots! A representative will reach out soon to confirm your reservation for a ${vehicle.value} and to handle any other requests including delivery service if needed.`; 
});
  






{/* <label><input type="checkbox" id="cruise">I'm arriving on a cruise ship</label>
                <label>What cruise line?<input type="text" id="line"></label>      
                <label>Do you need delivery/have any comments?<textarea id="comment" name="comment"></textarea></label>
                <button id="showMessage">Make My Reservation</button>
                <div id="submission"></div> */}