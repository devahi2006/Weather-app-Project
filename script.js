async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

async function showWeather(city) {
  if (!city) return;

  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong!");
    return;
  }

  document.getElementById("weather-icon").src =
    data.weather?.[0]?.icon || "";

  document.getElementById("main-temperature").textContent =
    data.main?.temp ?? "N/A";

  document.getElementById("feels-like").textContent =
    data.main?.feels_like ?? "N/A";

  document.getElementById("humidity").textContent =
    data.main?.humidity ?? "N/A";

  document.getElementById("wind").textContent =
    data.wind?.speed ?? "N/A";

  document.getElementById("wind-gust").textContent =
    data.wind?.gust ?? "N/A";

  document.getElementById("weather-main").textContent =
    data.weather?.[0]?.main ?? "N/A";

  document.getElementById("location").textContent =
    data.name ?? "N/A";
}

document
  .getElementById("get-weather-btn")
  .addEventListener("click", () => {
    const city = document.getElementById("city-select").value;
    showWeather(city);
  });