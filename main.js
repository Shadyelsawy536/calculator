let display = document.getElementById('display');

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    let currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}

function calculate() {
    try {
    display.value = eval(display.value);
    } catch(error) {
    display.value = 'Error';
    }
}
function calculatePercentage() {
    display.value = parseFloat(display.value) / 100;
}