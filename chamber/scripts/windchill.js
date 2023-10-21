// windchill.js

// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate the wind chill factor
        var windChill = 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2) + "°F";
    } else {
        return "N/A";
    }
}

// Get the temperature and wind speed values from your HTML (update these IDs)
var temperatureValue = parseFloat(document.getElementById("temperature").textContent);
var windSpeedValue = parseFloat(document.getElementById("wind-speed").textContent);

// Calculate the wind chill factor
var windChillValue = calculateWindChill(temperatureValue, windSpeedValue);

// Display the wind chill value in the HTML (update this ID)
document.getElementById("wind-chill").textContent = "Wind Chill: " + windChillValue;
