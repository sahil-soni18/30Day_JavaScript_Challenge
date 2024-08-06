const apiKey = 'c506502b4a896070e322d43f7308b172';
const weatherContainer = document.getElementById('weather-info');
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const forecastContainer = document.getElementById('forecast-container');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeatherData(city);
        fetchForecastData(city);
    } else {
        alert('Please enter a city name.');
    }
});

function fetchWeatherData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Weather data fetch error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.cod !== 200) {
                throw new Error(`Error: ${data.message}`);
            }
            console.log(data);
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please check the console for more details.');
        });
}

function displayWeatherData(data) {
    const { name, main, weather } = data;
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    weatherContainer.innerHTML = `
        <h2>${name}</h2>
        <img src="${iconUrl}" alt="${weather[0].description}">
        <p>${main.temp} °C</p>
        <p>${weather[0].description}</p>
    `;
}

function fetchForecastData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Forecast data fetch error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.cod !== "200") {
                throw new Error(`Error: ${data.message}`);
            }
            console.log(data);
            displayForecastData(data);
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
            alert('Error fetching forecast data. Please check the console for more details.');
        });
}

function displayForecastData(data) {
    forecastContainer.innerHTML = ''; // Clear any existing forecast data
    const forecastList = data.list.filter((item, index) => index % 8 === 0); // Get daily forecast at noon

    forecastList.forEach(forecast => {
        const date = new Date(forecast.dt_txt).toDateString();
        const temp = forecast.main.temp;
        const description = forecast.weather[0].description;
        const iconUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        const forecastItem = document.createElement('div');
        forecastItem.innerHTML = `
            <p>${date}</p>
            <img src="${iconUrl}" alt="${description}">
            <p>${temp} °C</p>
            <p>${description}</p>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}