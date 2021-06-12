function convertToFahrenheit(celciusTemperature) {
    const multiplyerConstant = 9 / 5;
    return (celciusTemperature * multiplyerConstant) + 32;
}


function convertToCelsius(fahrenheitTemperature) {
    return (fahrenheitTemperature - 32) / (9 / 5)
}