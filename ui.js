class UI{
    constructor(){
        this.location =  document.getElementById("w-location");
        this.desc =  document.getElementById("w-desc");
        this.icon =  document.getElementById("w-icon");
        this.string =  document.getElementById("w-string");
        this.details =  document.getElementById("w-details");
        this.humidity =  document.getElementById("w-humidity");
        this.feelsLike =  document.getElementById("w-feels-like");
        this.wind =  document.getElementById("w-wind");
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.icon.setAttribute("src", "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"); 
        this.string.textContent = weather.main.temp;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
    }
}