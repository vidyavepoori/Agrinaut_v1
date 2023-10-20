// Function to generate a random integer within a specific range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nh3Gauge() {
    return new JustGage({
        id: "nh3Gauge",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100, // Set the appropriate max value for CO2 concentration
        title: "NH3 Concentration",
        label: "ppm",
        gaugeColor: "#2af",
        levelColors: ["#FF0000", "#FFA500", "#00FF00"],
    });
}

function ch4Gauge() {
    return new JustGage({
        id: "ch4Gauge", 
        value: getRandomInt(0, 50000),
        min: 0,
        max: 50000, // Set the appropriate max value for CO2 concentration
        label: "oo",
        gaugeColor: "#0bf",
        levelColors: ["#FF0000", "#FFA500", "#00FF00"],
    });
}

function co2Gauge() {
    return new JustGage({
        id: "co2Gauge",
        value: getRandomInt(0, 50000),
        min: 0,
        max: 50000, // Set the appropriate max value for CO2 concentration
        label: "ppm",
        gaugeColor: "#0df",
        levelColors: ["#FF0000", "#FFA500", "#00FF00"],
    });
}
function lightGauge() {
    return new JustGage({
        id: "light",
        value: getRandomInt(0, 6500),
        min: 0,
        max: 6500, // Set the appropriate max value for CO2 concentration
        label: "Lx",
        gaugeColor: "#fe0",
        levelColors: ["#FF0000", "#FFA500", "#00FF00"],
    });
}

function windGauge() {
    return new JustGage({
        id: "wind",
        value: getRandomInt(1, 70),
        min: 0.4,
        max: 70.0, // Set the appropriate max value for CO2 concentration
        title: " Wind Speed",
        label: "m/s",
        gaugeColor: "#9af",
        levelColors: ["#FF0000", "#FFA500", "#00FF00"],
    });
}

function phGauge() {
    return new JustGage({
        id: "ph",
        value: getRandomInt(0, 14),
        min: 0,
        max: 14, // Set the appropriate max value for CO2 concentration
        gaugeColor: "#999",
        levelColors: ["#FF0000", "#FFA500", "#00FF00"],
    });
}
function airGauge() {
    return new JustGage({
        id: "ap",
        value: getRandomInt(10, 80),
        min: 10,
        max: 80, // Set the appropriate max value for CO2 concentration
        label: "kpa",
        gaugeColor: "#304",
        levelColors: ["#FF0000", "#FFA500", "#00FF00"],
    });
}

function updateTemperature(temperature) {

    const temperatureBar = document.getElementById('temperature-bar');
    const temperatureMarker = document.getElementById('temperature-marker');
    const temperatureValue = document.getElementById("temperature-value");

    // Calculate the marker position based on temperature
    const position = (temperature - 0) * (temperatureBar.offsetWidth / 100);
    temperatureMarker.style.left = position + 'px';

    // Calculate the marker color based on temperature
    const color = getColorForTemperature(temperature);
    temperatureMarker.style.backgroundColor = color;

    temperatureValue.textContent = temperature + "°C";
}

// Function to get the color for a given temperature value
function getColorForTemperature(temperature) {
    // Map temperature to a color gradient
    const colors = ['#00f', '#0af', '#0ff', '#ff0', '#f60', '#f00'];
    const temperatureRange = 0; // Change this if needed
    const index = Math.floor((temperature / temperatureRange) * (colors.length - 1));
    return colors[index];
}


function updateHumidity(temperature) {

    const temperatureBar = document.getElementById('temperature-bar');
    const temperatureMarker = document.getElementById('humidity-marker');
    const temperatureValue = document.getElementById("humidity-value");

    // Calculate the marker position based on temperature
    const position = (temperature - 0) * (temperatureBar.offsetWidth / 100);
    temperatureMarker.style.left = position + 'px';

    // Calculate the marker color based on temperature
    const color = getColorForhumidity(temperature);
    temperatureMarker.style.backgroundColor = color;

    temperatureValue.textContent = temperature + "°C";
}

// Function to get the color for a given temperature value
function getColorForhumidity(temperature) {
    // Map temperature to a color gradient
    const colors = ['#00f', '#0af', '#0ff', '#ff0', '#f60', '#f00'];
    const temperatureRange = 0; // Change this if needed
    const index = Math.floor((temperature / temperatureRange) * (colors.length - 1));
    return colors[index];
}

// Function to refresh the page after 5 seconds
function refreshPage() {
    location.reload();
}

// Create the CO2 gauge
var nh3Gauge = nh3Gauge();
var ch4Gauge = ch4Gauge();
var co2Gauge = co2Gauge();
var lightGauge = lightGauge();
var windGauge = windGauge();
var phGauge = phGauge();
var airGauge = airGauge()
const tempVal = getRandomInt(20, 30);
const humVal = getRandomInt(30, 50);
updateTemperature(tempVal);
updateHumidity(humVal);


// Refresh the page after 5 seconds
setTimeout(refreshPage, 2000);