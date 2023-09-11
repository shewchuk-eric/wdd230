

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
const today = document.querySelector('#date').innerHTML = new Date().toLocaleDateString("en-US", options);