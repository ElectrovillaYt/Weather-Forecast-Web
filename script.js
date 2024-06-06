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
         if ((location != "") || (location != "\t")) {
            if (response.temp != undefined) {
               city_name.innerHTML = " " + location;
               temperature_valueC.innerHTML = " " + response.temp + "°C";
               min_temp.innerHTML = " " + response.min_temp + "°C";
               max_temp.innerHTML = " " + response.max_temp + "°C";
               feels_like.innerHTML = " " + response.feels_like + "°C";
               humidity.innerHTML = " " + response.humidity + "%";
               wind_speed.innerHTML = " " + response.wind_speed;
               wind_degrees.innerHTML = " " + response.wind_degrees;
            }
         }
         else {
            getWeather("Delhi");
            alert("Please enter the Location!");
         }
      })
      .catch(err => console.error(err));
}
getWeather("Delhi");

search_btn.addEventListener("click", (x) => {
   x.preventDefault();
   getWeather(search.value);
});
addEventListener("keydown", (x) => {
   x.preventDefault()
   if (x.key === 'Enter') {
      getWeather(search.value);
   };
});
