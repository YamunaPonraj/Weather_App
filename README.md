# Weather App 🌤️

A simple weather app built with HTML, CSS and JavaScript that lets you search any city and see live temperature, humidity and wind speed.

🔗**Live Demo:** https://github.com/YamunaPonraj/Weather_App

## Features

- Search current weather by city name
- Displays temperature, humidity and wind speed
- Input validation for empty city names
- Error handling for invalid cities and network failures
- Loading message while data is being fetched
- Press Enter to search

## Tech Stack

- HTML5
- CSS3 (Flexbox)
- JavaScript (ES6, Fetch API, async/await)
- [Open-Meteo API](https://open-meteo.com/) (Geocoding + Weather Forecast)

## How It Works

1. The user enters a city name.
2. The Geocoding API converts the city name into latitude and longitude.
3. The Weather API uses those coordinates to fetch current weather data.
4. The data is displayed on the page.

## Project Structure

```
weather-app/
├── index.html
├── style.css
└── script.js
```

## Run Locally

1. Clone the repository
```bash
   git clone https://github.com/YamunaPonraj/Weather_App.git
```
2. Open the folder and double-click `index.html` in your browser.

No API key or installation is required.

## What I Learned

- Working with REST APIs using `fetch` and `async/await`
- DOM manipulation and event handling
- Error handling with `try/catch`
- Chaining multiple API calls

## Future Improvements

- Weather icons based on conditions
- °C / °F toggle
- Save last searched city using localStorage

## Screenshot

<img width="1839" height="888" alt="image" src="https://github.com/user-attachments/assets/738b51b7-1fe6-4c44-a7c0-1c349a04bb75" />

## Author

Yamuna Ponraj   <br>
GitHub: https://github.com/YamunaPonraj  <br> 
Linkedin: https://www.linkedin.com/in/yamuna-ponraj/    <br>
Email: yamunaponraj91@gmail.com




