async function getWeather() {
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Please select a city");
    return;
  }

  try {
    const res = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );

    const data = await res.json();

    document.getElementById("weather").classList.remove("hidden");

    document.getElementById("icon").src =
      data.weather?.[0]?.icon || "";

    document.getElementById("temp").textContent =
      Math.round(data.main?.temp ?? 0) + "°C";

    document.getElementById("condition").textContent =
      data.weather?.[0]?.main ?? "N/A";

    document.getElementById("humidity").textContent =
      (data.main?.humidity ?? 0) + "%";

    document.getElementById("wind").textContent =
      (data.wind?.speed ?? 0) + " km/h";

    document.getElementById("feels").textContent =
      Math.round(data.main?.feels_like ?? 0) + "°C";

    document.getElementById("location").textContent =
      data.name ?? "";

  } catch (err) {
    alert("Failed to fetch weather");
    console.error(err);
  }
}
