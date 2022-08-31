const form = document.getElementById('form');
const tempUnit = document.getElementById('unit');
const temperature = document.getElementById('temperature');
const result = document.getElementById("result");
function toFarenheit(celsius) {
    return ((9 * celsius) / 5) + 32;
}

function toCelsius(farenheight) {
    return ((5 / 9) * (farenheight - 32));
}

form.addEventListener('submit', (e) => {
    console.log(tempUnit.options); //returns a collection
    const unit = tempUnit.options[tempUnit.selectedIndex].value;
    if (unit == "celsius")
        result.innerText = `The temperature in farenheight ${toFarenheit(temperature.value)}`;
    else {
        if (unit == "farenheight")
        result.innerText = `The temperature in celsius ${toCelsius(temperature.value)}`;
    }
    e.preventDefault();
})