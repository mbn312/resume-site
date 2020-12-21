var dayOfWeek = "";

function formatDate(date, month, year)
{
  month = (month.length < 2) ? ('0' + month) : month;
  date = (date.length < 2)? ('0' + date) : date;
  return [year,month,date].join('-');
}
function getDayofWeek(date, month, year){
  var week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayOfWeek =  week_names[new Date([month,date,year].join('-')).getDay()];
}
function getFarenheitTemp(temp){
  return (9*temp/5)+32;
}

function get_weather() {
$(document).ready(function() {
  var access_key = "5bc82451636190abd9d7afe6fe9b20b5";
  var latitude= latitude_input.value  //Boulder Latitidude = 40.0150
  var longitude= longitude_input.value  //Boulder Longitude = -105.2705
  var url ='https://api.weatherstack.com/forecast?access_key=' + access_key + '&query=' + latitude + ',' + longitude + '&forecast_days=6'; 

  $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

    console.log(data);
    console.log("Current Temp: " + getFarenheitTemp(data.current.temperature));
    var current_time = new Date(data.location.localtime);
    console.log(current_time.getDay());

    document.getElementById("local_time").innerHTML = data.location.localtime;
    document.getElementById("image_today").src = data.current.weather_icons;
    document.getElementById("heading").innerHTML = "Today's Weather Forecast - " + data.location.name;
    document.getElementById("temp_today").innerHTML = getFarenheitTemp(data.current.temperature) + " F";
    document.getElementById("thermometer_inner").style.height = getFarenheitTemp(data.current.temperature) + '%';
    document.getElementById("precip_today").innerHTML = data.current.precip + '%';
    document.getElementById("humidity_today").innerHTML = data.current.humidity + '%';
    document.getElementById("wind_today").innerHTML = data.current.wind_speed + ' mph';
    document.getElementById("summary_today").innerHTML = data.current.weather_descriptions;
    
    var thermometer_color = "grey";
    if (getFarenheitTemp(data.current.temperature) > 85) {
      thermometer_color = "red";
    } else if (getFarenheitTemp(data.current.temperature) < 65) {
      thermometer_color = "blue";
    }

    document.getElementById("thermometer_inner").style.backgroundColor = thermometer_color;

    function getKey(i){
        var week_names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
        dayOfWeek=week_names[new Date(Object.keys(data.forecast)[i]).getDay()];
        return data.forecast[Object.keys(data.forecast)[i]];
    }

    var cards = "";
    for(i=1; i < 6; i++) {
      var forecast = getKey(i);
      cards +=  `
      <div style="width: 20%;">
        <div class="card">
          <div class="card-body">
           <h5 class="card-title">${dayOfWeek}</h5>
           <p class="card-text">High: ${getFarenheitTemp(forecast.maxtemp)} F<br>
              Low: ${getFarenheitTemp(forecast.mintemp)} F<br>
              Sunrise: ${forecast.astro.sunrise}<br>
              Sunset: ${forecast.astro.sunset}</br>
          </div>
        </div>
      </div>`;
    }
    document.getElementById("5_day_forecast").innerHTML = cards;
  })
});
}