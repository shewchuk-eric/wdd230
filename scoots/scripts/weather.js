// GET CURRENT WEATHER DATA AND DISPLAY TO WIDGET
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const chill = document.querySelector("#chill");
const speed = document.querySelector('#speed');
const forecast = document.querySelector('#forecast');
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.492&lon=-86.938&appid=49e215c7377482c19b8ebde5c2bca5a2&units=imperial&lang=en'; // Cozumel

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    let item = data.list[0]; // define the base to shorten following lines of code
    currentTemp.innerHTML = `${Math.trunc(item.main.temp)} &deg;F`;
    speed.innerHTML = `${item.wind.speed} mph`;
    chill.innerHTML = `${item.main.feels_like} &deg; F`;
    const iconsrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
    let desc = item.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `icon for ${desc}`);
    captionDesc.innerHTML = `${desc}`;
    let loopItem = data.list[8];
    let nextTemp = document.createElement('p'); // create space for forecast
    nextTemp.setAttribute('class', 'temperature');
    let icon = document.createElement('img'); // create image element
    const newIcon = `https://openweathermap.org/img/w/${loopItem.weather[0].icon}.png`;
    let newDesc = loopItem.weather[0].description;
    icon.setAttribute('src', newIcon);
    icon.setAttribute('alt', `icon for ${newDesc}`);
    nextTemp.innerHTML = `${Math.trunc(loopItem.main.temp)} &deg;F`;
    forecast.appendChild(nextTemp);
    forecast.appendChild(icon);
}
