document.addEventListener('DOMContentLoaded', () => {
  const API_KEY = '991677fedf714820d800abcd0a3494e1';
  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const $weather = document.querySelector('.weather span:first-child');
        const $city = document.querySelector('.weather span:last-child');
        $weather.innerText = data.name;
        $city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
});
