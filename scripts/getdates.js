

const options = {
    year: "numeric"
};
const today = document.querySelector('#date').innerHTML = new Date().toLocaleDateString("en-US", options);