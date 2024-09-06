// Get the display/input element
const inputBox = document.getElementById('inputbox');

// Function to append numbers to the display
function appendNumber(number) {
    if (inputBox.value === "0") {
        inputBox.value = number; // replace initial 0
    } else {
        inputBox.value += number;
    }
}

// Function to append operators to the display
function appendOperator(operator) {
    inputBox.value += operator;
}

// Function to append decimal point
function appendDot() {
    if (!inputBox.value.includes('.')) {
        inputBox.value += '.';
    }
}

// Function to calculate the result
function calculate() {
    try {
        inputBox.value = eval(inputBox.value); // Evaluate the expression
    } catch (error) {
        inputBox.value = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    inputBox.value = "0";
}

// Function to delete the last digit
function deleteDigit() {
    inputBox.value = inputBox.value.slice(0, -1);
    if (inputBox.value === "") {
        inputBox.value = "0";
    }
}
