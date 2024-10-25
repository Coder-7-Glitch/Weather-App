async function getWeather() {
    try {
        const location = document.getElementById('city').value;

        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=C5HGHQKLALDP5ENMSU95UUGKR&contentType=json`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        const currentWeather = data.days[0];

        document.getElementById('city').innerHTML = data.resolvedAddress;
        document.getElementById('Humidity').innerHTML = `${currentWeather.humidity}%`;
        document.getElementById('Temperature').innerHTML = `${currentWeather.temp}°C`;
        document.getElementById('Wind').innerHTML = `${currentWeather.windspeed} km/h`;

        console.log(data);

        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
