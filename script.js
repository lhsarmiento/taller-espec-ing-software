let display = document.getElementById('display');

function appendToDisplay(value) {

    if (value === 'sin' || value === 'cos' || value === 'tan') {
        try {
            display.value = eval(display.value);

            display.value = value === 'sin' ? Math.sin(display.value) :
                value === 'cos' ? Math.cos(display.value) :
                    value === 'tan' ? Math.tan(display.value) : display.value;
        } catch (error) {
            display.value = 'Error';
        }
    }
    else
        display.value += value;
}

function removeToDisplay(value) {

    var longitud = display.value.length;
    if (longitud > 0) {
        display.value = display.value.substring(0, longitud - 1);
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


