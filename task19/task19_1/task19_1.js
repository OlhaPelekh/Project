// За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current
// Також потрібно додати кнопку оновлення данних.

let apiKey;
const fs = require("fs");
try {
  const data = fs.readFileSync("apiKey.txt", "utf8");
  apiKey = data.toString();
} catch (err) {
  console.error("Error:", err.stack);
  return;
}

const city = "Lviv";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

let array = [];
async function readData() {
  try {
    const data = await fs.readFileSync("data.json", "utf8");
    array = JSON.parse(data);
  } catch (err) {
    console.error("Error reading file:", err);
    return;
  }
}
async function getWindDirection(degree) {
  await readData();
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

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${errorMessage}`);
    }
    const data = await response.json();

    const date = new Date(data.dt * 1000); // Перетворюємо Unix час у мілісекунди

    const month = date.getUTCMonth();
    console.log(getMonth(month));

    const day = date.getUTCDate();
    console.log(day);

    const year = date.getUTCFullYear();
    console.log(year);

    const dayWeek = date.getUTCDay();
    console.log(getDayWeek(dayWeek));

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunriseHours = sunrise.getHours();
    const sunriseMinutes = sunrise.getMinutes();
    console.log(`SUN ${changeTimeFormat(sunriseHours, sunriseMinutes)}`);

    const currentHours = date.getHours();
    const currentMinutes = date.getMinutes();
    console.log(changeTimeFormat(currentHours, currentMinutes));

    const humidity = data.main.humidity;
    console.log(`Humidity: ${humidity}%`);

    const pressure = data.main.pressure;
    console.log(`Pressure: ${pressure} hPa`);

    const windDegree = data.wind.deg;
    console.log(windDegree);

    const windDirection = await getWindDirection(windDegree);
    console.log(`Wind: ${data.wind.speed} km/h ${windDirection}`);

    const temperature = data.main.temp;
    console.log(convertKelvinToCelsius(temperature));

    const feelsLike = data.main.feels_like;
    console.log(`Feels Like: ${convertKelvinToCelsius(feelsLike)}`);

    const weatherDescription = data.weather[0].description;
    console.log(weatherDescription);

    const sunset = new Date(data.sys.sunset * 1000);
    const sunsetMonth = sunset.getMonth();
    const sunsetDay = sunset.getDate();
    const sunsetHours = sunset.getHours();
    const sunsetMinutes = sunset.getMinutes();
    console.log(
      `${getMonth(sunsetMonth)} ${sunsetDay} ${changeTimeFormat(
        sunsetHours,
        sunsetMinutes
      )}`
    );
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

fetchData();
