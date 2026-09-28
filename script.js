const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const result = document.getElementById("result");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Type City Name..";
        return;
    }

    message.textContent = "Loading...";
    result.classList.add("hidden");

    try {
        // API call 1: city -> latitude, longitude
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();
        console.log(geoData);

        if (!geoData.results) {
            message.textContent = "City Not Found...";
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // API call 2: weather data
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();
        console.log(weatherData.current);

        // Display
        cityName.textContent = `${name}, ${country}`;
        temp.textContent = `${weatherData.current.temperature_2m}°C`;
        humidity.textContent = `Humidity: ${weatherData.current.relative_humidity_2m}%`;
        wind.textContent = `Wind: ${weatherData.current.wind_speed_10m} km/h`;

        message.textContent = "";
        result.classList.remove("hidden");

    } catch (error) {
        console.log(error);
        message.textContent = "Something went wrong. Internet check pannunga";
        result.classList.add("hidden");
    }
}