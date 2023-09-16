const apikey = "4b080f0d9c0e6c7f2f2589a05bde5c6e"; // variable for storing api key 
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; // api url variable
const searchBox = document.querySelector(".search input"); // serabox for taking city name
const searchBtn = document.querySelector(".search img"); // search image for searching city
const WheatherIcon = document.querySelector(".wheather-icon") // weather icon for knowing the status of weather

// function for checking the wheather by city name 
async function checkWheather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".wheather").style.display="none";
        document.querySelector(".details").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none"
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        
            if (data.weather[0].main == "Clouds") {
                WheatherIcon.src= "images/clouds.png";
            }
            else if (data.weather[0].main == "Clear") {
                WheatherIcon.src = "images/clear.png";
            }
            else if (data.weather[0].main == "Drizzle") {
                WheatherIcon.src = "images/drizzle.png";
            }
            else if (data.weather[0].main == "Rain") {
                WheatherIcon.src = "images/rain.png";
            }
            else if (data.weather[0].main == "Snow") {
                WheatherIcon.src = "images/snow.png";
            }
            else if (data.weather[0].main == "Mist") {
                WheatherIcon.src = "images/mist.png";
            }
            document.querySelector(".wheather").style.display="flex";
            document.querySelector(".details").style.display="flex";
    }

  
}
searchBtn.addEventListener("click",() => {
    checkWheather(searchBox.value);
})


checkWheather();