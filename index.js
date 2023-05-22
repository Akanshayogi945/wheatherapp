
async function Day_toggle(){
const hour = new Date().getHours()
const isday  = hour > 6 && hour < 20;
document.getElementById("card-box").style.backgroundImage  = "url('Night.png')";



if(isday === true){
    console.log("day");
    document.getElementById("card-box").style.backgroundImage  = "url('Night.png')";

   }
else{
    console.log("night"); 
    document.getElementById("card-box").style.backgroundImage  = "url('Night.png')";
   
   }
}

async function getdata() {
    var inputVal = document.getElementById("searchTxt").value;

    const res = await fetch(
        "https://weatherapi-com.p.rapidapi.com/current.json?q=q=" + inputVal, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "4f8234a62amsh42185b0b78f249cp12e57ajsnb401d01fcbbf",
            },
        }
    );
    

    

    getWeekDay();
    const data = await res.json();
    console.log(data);
    document.getElementById("location").innerText = data.location.name;
    document.getElementById("locationParts").innerHTML = "<i class='bi bi-geo-alt'></i> " +
        data.location.region + " , " + data.location.country;
    document.getElementById("dateTime").innerHTML = "<i class='bi bi-calendar'></i> " +
        data.location.localtime.substr(0, 10);
    document.getElementById("txtWord").innerText = data.current.condition.text;
    document.getElementById("humidity").innerText =
        "Humidity: " + data.current.humidity + "%";
    document.getElementById("precipitation").innerText =
        "Precipitation: " + data.current.precip_mm + "%";
    document.getElementById("wind").innerText =
        "Wind: " + data.current.wind_kph + "km/h";
    document.getElementById("temperatureC").innerText =
        data.current.temp_c + " °C";
    document.getElementById("temperatureF").innerText =
        data.current.temp_f + " °F";
    
        
       
}



function getWeekDay() {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("weekDay").innerText = day;
}