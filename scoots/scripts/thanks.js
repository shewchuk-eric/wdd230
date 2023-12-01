const sender = document.querySelector('#showMessage');
const fname = document.querySelector('#fname');
const msg = document.querySelector('#thanks');

sender.addEventListener('click', () => {
    msg.textContent = `Thank you, ${fname.value}. We look forward to helping you have a fantastic day!  A representative who can answer your questions and help you plan your holiday will contact you shortly.`; 
});