class Weather{
    constructor(city){
        this.apiKey = "cf8e243777aad11472abd22a57d8dff8";
        this.city = city;
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        const responseData = response.json();

        return responseData;
    }

    //Change weather location
    changeLocation(city){
        this.city = city;
    }
}