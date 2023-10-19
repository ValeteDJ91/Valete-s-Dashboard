if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(async (position) => {
    setWeather(position.coords.latitude, position.coords.longitude)
  }, (error) => {
    if (error.code == error.PERMISSION_DENIED)
    alert("Can't acces your geolocation.\nAllow geolocation in your browser or disable the weather widget in config.")
    removeWidget()
  });
} else {
  alert("Can't acces your geolocation.\nAllow geolocation in your browser or disable the weather widget in config.")
  removeWidget()
}

async function setWeather(lat, long) {
  const meteoreq = await fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+long+"&current=temperature_2m,precipitation,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&timezone=Europe%2FBerlin&forecast_days=1")
  const meteo = await meteoreq.json()
  document.getElementById("widget_temp").innerHTML = meteo.current.temperature_2m+" "+meteo.current_units.temperature_2m
  document.getElementById("widget_temp_min").innerHTML = "&#8681; "+meteo.daily.temperature_2m_min+" "+meteo.daily_units.temperature_2m_min
  document.getElementById("widget_temp_max").innerHTML = "&#8679; "+meteo.daily.temperature_2m_max+" "+meteo.daily_units.temperature_2m_max
  if (new Date(meteo.daily.sunrise) < new Date() && new Date(meteo.daily.sunset) > new Date()) {
    let sun = new Date(meteo.daily.sunset)
    document.getElementById("widget_sun").innerHTML = sun.getHours()+":"+sun.getMinutes()
    document.getElementById("widget_sun_img").src = "image/sunset.svg"
  } else {
    let sun = new Date(meteo.daily.sunrise)
    document.getElementById("widget_sun").innerHTML = sun.getHours()+":"+sun.getMinutes()
    document.getElementById("widget_sun_img").src = "image/sunrise.svg"
  }
}

function removeWidget() {
  document.getElementById("widget_temp").remove()
  document.getElementById("widget_temp_min").remove()
  document.getElementById("widget_temp_max").remove()
  document.getElementById("widget_sun_container").remove()
}