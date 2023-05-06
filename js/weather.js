const API_KEY = "523da2529a588a4202e28465a04490e5";

const weatherDiv = document.querySelector("#weather-div");

/**
 * 
 * @param {*} position 
 */
function onGeoSuccess(position)
{
    const lat = position.coords.latitude;
    const lon= position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const country = weatherDiv.querySelector("#country-span");
        country.innerText = data.sys.country;
        const village = weatherDiv.querySelector("#village-span");
        village.innerText = data.name; 
        const weather = weatherDiv.querySelector("#weather-span");
        weather.innerText = data.weather[0].main;
        const curtemp = weatherDiv.querySelector("#curtemp-span");
        curtemp.innerText = data.main.temp.toFixed(1)+"°C";
        const maxmintemp = weatherDiv.querySelector("#maxmintemp-span");
        maxmintemp.innerText = data.main.temp_max.toFixed(1)+" / "+data.main.temp_min.toFixed(1)+"°C";
    });
}

function onGeoError()
{
    console.log("Can't find you. No weather for you. so... where are you now?!");
} 

// 현재 위치 좌표
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);