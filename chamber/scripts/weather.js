// GET CURRENT WEATHER DATA AND DISPLAY TO WIDGET
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const chill = document.querySelector("#chill");
const speed = document.querySelector('#speed');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=22.22&lon=-159.48&appid=49e215c7377482c19b8ebde5c2bca5a2&units=imperial&lang=en';

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
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)} &deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `icon for ${desc}`);
    captionDesc.textContent = desc.toUpperCase();
    speed.innerHTML = `${data.wind.speed} mph`;
    chill.innerHTML = `${data.main.feels_like} &deg; F`;

}
//22°09'20.9"N 159°18'57.2"W - Anahola