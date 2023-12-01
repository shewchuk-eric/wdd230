// GET CURRENT WEATHER DATA AND DISPLAY TO WIDGET
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const chill = document.querySelector("#chill");
const speed = document.querySelector('#speed');
const forecast = document.querySelector('#forecast');
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=22.22&lon=-159.48&appid=49e215c7377482c19b8ebde5c2bca5a2&units=imperial&lang=en';  good for current day only
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.492&lon=-86.938&appid=49e215c7377482c19b8ebde5c2bca5a2&units=imperial&lang=en'; // good for forecast

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
    let i=0;
    let item = data.list[i]; // define the base to shorten following lines of code
    currentTemp.innerHTML = `${Math.trunc(item.main.temp)} &deg;F`;
    speed.innerHTML = `${item.wind.speed} mph`;
    chill.innerHTML = `${item.main.feels_like} &deg; F`;
    const iconsrc = `https://openweathermap.org/img/w/${item.weather[i].icon}.png`;
    let desc = item.weather[i].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `icon for ${desc}`);
    captionDesc.innerHTML = `${desc}`;
    i = i+8;
    while (i<25) { // loop through forecast data and display to page
        let loopItem = data.list[i];
        let nextTemp = document.createElement('div'); // create space for forecast
        nextTemp.setAttribute('class', 'temperature');
        let icon = document.createElement('img'); // create image element
        const newIcon = `https://openweathermap.org/img/w/${loopItem.weather[0].icon}.png`;
        let newDesc = loopItem.weather[0].description;
        icon.setAttribute('src', newIcon);
        icon.setAttribute('alt', `icon for ${newDesc}`);
        nextTemp.innerHTML = `${Math.trunc(loopItem.main.temp)} &deg;F`;
        // nextTemp.appendChild(icon);
        forecast.appendChild(nextTemp);
        forecast.appendChild(icon);
        i=i+8;
    }
    //     alert (item.main.temp);
    // // currentTemp.innerHTML = `${Math.trunc(item.main.temp)} &deg;F`;
    // const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // let desc = data.weather[0].description;
    // weatherIcon.setAttribute('src', iconsrc);
    // weatherIcon.setAttribute('alt', `icon for ${desc}`);
    // captionDesc.textContent = desc.toUpperCase();

    // speed.innerHTML = `${data.wind.speed} mph`;
    // chill.innerHTML = `${data.main.feels_like} &deg; F`;
    }

//22°09'20.9"N 159°18'57.2"W - Anahola