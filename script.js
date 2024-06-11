const options = {
   method: 'GET',
   headers: {
      'X-Api-Key': 'J2qucRftTzZNlLz7tFwkw03KL0HnQfHBa1eYEDfg'
   }
};

const getWeather = (location) => {
   fetch('https://api.api-ninjas.com/v1/weather?city=' + location, options)
      .then(response => response.json())
      .then((response) => {
         if (response.temp != undefined) {
            city_name.innerHTML = " " + location;
            temperature_valueC.innerHTML = " " + response.temp + "°C";
            min_temp.innerHTML = " " + response.min_temp + "°C";
            max_temp.innerHTML = " " + response.max_temp + "°C";
            feels_like.innerHTML = " " + response.feels_like + "°C";
            humidity.innerHTML = " " + response.humidity + "%";
            wind_speed.innerHTML = " " + response.wind_speed*3.6;
            wind_degrees.innerHTML = " " + response.wind_degrees;
         }
      })
      .catch(err => console.error(err));
}
getWeather("Delhi");

search_btn.addEventListener("click", (x) => {
   x.preventDefault()
   getWeather(search.value);
});
addEventListener("keydown", (x) => {
   if (x.key === 'Enter') {
      x.preventDefault()
      getWeather(search.value);
   };
});
