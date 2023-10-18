let temp = document.querySelector("#temp").textContent;
let speed = document.querySelector("#speed").textContent;
const chill = document.querySelector("#chill");

temp = parseFloat(temp);
speed = parseFloat(speed);


if (temp > 50 || speed < 3) {
    chill.textContent = "N/A";
} else {
    let feeling = (35.74 + (0.6215 * temp) - (35.75 * speed ** 0.16) + ((0.4275 * temp) * speed ** 0.16)).toFixed(2);
    chill.textContent = `${feeling}`;
}