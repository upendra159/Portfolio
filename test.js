const display = document.getElementById("display");

display.value = "0";

function appendToDisplay(input) {
    if (display.value === "0") {
        if (!isNaN(input) || input === '.') {
            display.value = input;
        } else {
            display.value += input;
        }
    } else {
        if (!isNaN(input) || input === '.') {
            let currentValue = display.value.replace(/,/g, '');
            display.value = currentValue + input;
            display.value = formatNumber(display.value);
        } else {
            display.value += input;
        }
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    let currentValue = display.value;
    if (currentValue.length > 1) {
        display.value = currentValue.slice(0, -1);
    } else {
        display.value = "0";
    }
}

function calculate() {
    try {
        let currentValue = display.value.replace(/,/g, '');
        let result = eval(currentValue);
        display.value = formatNumber(result);
    } catch (error) {
        display.value = "Error";
    }
}

function formatNumber(num) {
    let parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}