  window.addEventListener("load", geolocation);
  const infoArea = document.querySelector('[data-home="info-location-weather"]');
  const weatherArea = document.createElement("div");
  weatherArea.classList.add("info-weather")

  
  function geolocation(){
    if(!('geolocation' in navigator)){
      console.log("Geolocalização não disponível")
    }else{
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude.toFixed(2)
        let longitude = position.coords.longitude.toFixed(2)
        console.log(latitude, longitude)
        showCity(latitude, longitude);
        showLocation(latitude, longitude)
      })
    }
  }

  const baseUrl = 'http://api.weatherapi.com/v1/current.json?'
  const apiKey = 'key=b9cc4f5dfc484691a6e173148221610';
  const complement = "&q=";

  function showCity(lat, long){
    axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}&zoom=10&addressdetails=1`)
    .then(function(response){
      const infoCity = response.data;
      showInfoCity(infoCity)
    })
  }

  function showLocation(lat, long){
    axios.get(`${baseUrl}${apiKey}${complement}${lat},${long}`)
    .then(function(response){
      const infoWeather = response.data;
      showInfoWeather(infoWeather)
    })
  }

  function showInfoWeather(response){
    let weather = document.createElement("h5");
    let icon = document.createElement("img");
    icon.src = response.current.condition.icon;
    weather.classList.add("header-info-weather__weather");

    weather.innerHTML = `${response.current.temp_c}°`;
    infoArea.appendChild(weatherArea);
    weatherArea.appendChild(icon)
    weatherArea.appendChild(weather);
  }

  function showInfoCity(response){
    let infoState = response.address['ISO3166-2-lvl4'];
    let infoCity = document.createElement("p");
    infoCity.classList.add("header-info-weather__city");
    infoCity.innerHTML = `${response.address.city} - ${infoState.substring(3, 5)}`;
    infoArea.appendChild(infoCity);
  }