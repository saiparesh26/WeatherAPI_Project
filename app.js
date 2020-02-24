//Initialize Storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Initialize weather class object

const weather = new Weather(weatherLocation);

//Initialize ui
const ui = new UI();



//Load weather on DOM load
document.addEventListener("DOMContentLoaded",getWeather);


//Change location event 
document.getElementById("w-change-btn").addEventListener("click", (e) => {
    const city = document.getElementById("city").value;
    //Change location
    weather.changeLocation(city);

    //Set location in LS
    storage.setLocationData(city);

    //Get and display weather
    getWeather();

    //Close weather
    $("#locModal").modal("hide");
});


function getWeather(){
    weather.getWeather()
    .then(data => {
        console.log(data);
        ui.paint(data);
    })
    .catch(err => console.log(err));
}
