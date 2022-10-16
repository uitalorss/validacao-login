  window.addEventListener("load", geolocation)
  
  function geolocation(){
    if(!('geolocation' in navigator)){
      console.log("Geolocalização não disponível")
    }else{
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude.toFixed(2)
        let longitude = position.coords.longitude.toFixed(2)
        showLocation(latitude, longitude)
      })
    }
  }

  const baseUrl = 'http://api.weatherapi.com/v1/current.json?'
  const apiKey = 'key=b9cc4f5dfc484691a6e173148221610';
  const complement = "&q=";

  function showLocation(lat, long){
    axios.get(`${baseUrl}${apiKey}${complement}${lat},${long}`)
    .then(function(response){
      const infoWeather = response.data;
      showInfoWeather(infoWeather)
    })
  }
  
  function showInfoWeather(response){
    const infoArea = document.querySelector('[data-home="info-location-weather"]');
    const weatherArea = document.createElement("div");

    let infoCity = document.createElement("p");
    let weather = document.createElement("h5");
    let icon = document.createElement("img");
    icon.src = response.current.condition.icon;
    infoCity.classList.add("header-info-weather__city");
    weather.classList.add("header-info-weather__weather");
    weatherArea.classList.add("info-weather")
    infoCity.innerHTML = response.location.name;
    weather.innerHTML = `${response.current.temp_c}°`;
    infoArea.appendChild(infoCity);
    infoArea.appendChild(weatherArea);
    weatherArea.appendChild(icon)
    weatherArea.appendChild(weather);
  }