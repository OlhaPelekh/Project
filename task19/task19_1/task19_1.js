// За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current
// Також потрібно додати кнопку оновлення данних.

let apiKey = 'apiKey';

const cityBase = "Lviv";
const city = prompt("Enter city: ", cityBase);
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

let array = [];
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    array = data;
  })
  .catch((error) => console.error("Error fetching JSON data:", error));

function getWindDirection(degree) {
  let closestDirection = array.windDirections[0].direction;
  let smallestDifference = Math.abs(degree - array.windDirections[0].degrees);

  array.windDirections.forEach((directionData) => {
    const difference = Math.abs(degree - directionData.degrees);
    if (difference < smallestDifference) {
      smallestDifference = difference;
      closestDirection = directionData.direction;
    }
  });

  return closestDirection;
}

function getMonth(monthNumber) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (monthNumber >= 0 && monthNumber < monthNames.length) {
    return monthNames[monthNumber];
  } else {
    return "Invalid month number";
  }
}

function getDayWeek(dayWeekNumber) {
  const dayWeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  if (dayWeekNumber >= 0 && dayWeekNumber < dayWeekNames.length) {
    return dayWeekNames[dayWeekNumber];
  } else {
    return "Invalid month number";
  }
}

function changeTimeFormat(hours, minutes) {
  const format = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutes} ${format}`;
}

function convertKelvinToCelsius(kelvin) {
  const celsius = (kelvin - 273.15).toFixed(1);
  return `${celsius}°C`;
}

function getImage(hour) {
  if (hour >= 0 && hour < 6) {
    return "img/night.jpg";
  } else if (hour < 12) {
    return "img/morning.jpg";
  } else if (hour < 18) {
    return "img/day.jpg";
  } else {
    return "img/evening.jpg";
  }
}

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${errorMessage}`);
    }
    const data = await response.json();

    const timezoneOffset = data.timezone;
    const date = new Date((data.dt + timezoneOffset) * 1000);

    const monthNumber = date.getMonth();
    const month = getMonth(monthNumber);
    const day = date.getDate();
    const year = date.getFullYear();
    const dayWeekNumber = date.getDay();
    const dayWeek = getDayWeek(dayWeekNumber);
    const dateTimeWeather = document.querySelector(".weather__date-time");
    dateTimeWeather.textContent = `${month} ${day}, ${year} - ${dayWeek}`;

    const sunrise = new Date((data.sys.sunrise + timezoneOffset) * 1000);
    const sunriseHours = sunrise.getUTCHours();
    const sunriseMinutes = sunrise.getUTCMinutes();
    const sunriseWeather = document.querySelector(".weather__sunrise");
    sunriseWeather.textContent = `SUN ${changeTimeFormat(
      sunriseHours,
      sunriseMinutes
    )}`;

    const currentHours = date.getUTCHours();
    const currentMinutes = date.getUTCMinutes();
    const currentTimeWeather = document.querySelector(".weather__current-time");
    currentTimeWeather.textContent = changeTimeFormat(
      currentHours,
      currentMinutes
    );

    const humidity = data.main.humidity;
    const humidityWeather = document.querySelector(".weather__humidity");
    humidityWeather.textContent = `Humidity: ${humidity}%`;

    const pressure = data.main.pressure;
    const pressureWeather = document.querySelector(".weather__pressure");
    pressureWeather.textContent = `Pressure: ${pressure} hPa`;

    const windDegree = data.wind.deg;
    const windDirection = getWindDirection(windDegree);
    const windWeather = document.querySelector(".weather__wind");
    windWeather.textContent = `Wind: ${data.wind.speed} km/h ${windDirection}`;

    const temperature = data.main.temp;
    const temperatureWeather = document.querySelector(".weather__temperature");
    temperatureWeather.textContent = convertKelvinToCelsius(temperature);

    const feelsLike = data.main.feels_like;
    const feelsLikeWeather = document.querySelector(".weather__feels-like");
    feelsLikeWeather.textContent = `Feels Like: ${convertKelvinToCelsius(
      feelsLike
    )}`;

    const weatherDescription = data.weather[0].description;
    const descriptionWeather = document.querySelector(".weather__description");
    descriptionWeather.textContent = `${weatherDescription}`;

    const sunset = new Date((data.sys.sunset + timezoneOffset) * 1000);
    const sunsetMonth = sunset.getMonth();
    const sunsetDay = sunset.getDate();
    const sunsetHours = sunset.getUTCHours();
    const sunsetMinutes = sunset.getUTCMinutes();
    const sunsetWeather = document.querySelector(".weather__sunset");
    sunsetWeather.textContent = `${getMonth(
      sunsetMonth
    )} ${sunsetDay} ${changeTimeFormat(sunsetHours, sunsetMinutes)}`;

    const imageUrl = getImage(currentHours);
    const weather = document.querySelector(".weather");
    weather.style.backgroundImage = `url("${imageUrl}")`;

    const buttonParent = document.querySelector(".weather__sunset");
    const button = document.createElement("a");
    button.className = "weather__refresh";
    button.innerHTML = "&#10227";
    button.href = "";
    buttonParent.appendChild(button);
    button.addEventListener("click", (e) => {
      e.preventDefault();
      fetchData();
    });
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    const weatherParent = document.querySelector('.weather');
    weatherParent.textContent = 'Check the correctness of data!';
    weatherParent.style.cssText = 'color:black;font-size: 30px';
  }
}

document.addEventListener("DOMContentLoaded", fetchData);
