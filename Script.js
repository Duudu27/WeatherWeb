let cityinput = document.getElementById('city_input'),
searchbtn = document.getElementById('searchbtn'),
api_key = '89e14ea12c6fa338a65f44e326736786';

function GetCityCoordinates() {
    let cityName = cityinput.ariaValueMax.trim();
    cityinput.value = '';
    if(!cityName) return;
    let GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=&{cityName}&limit={limit}&appid=&{api_key}`;
    fetch(GEOCODING_API_URL) .then(res => res.json()) .then(data => {
        console.log(data);
    }) .catch(() => {
        alert(`Failed to fetch coordinates of ${cityName}`);
    })
}

searchbtn.addEventListener('click', GetCityCoordinates);