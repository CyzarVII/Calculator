let isResultDisplayed = false;

function appendValue(value) {
    const display = document.getElementById('display');
    
    // If a result is displayed and the user enters a number, clear the display
    if (isResultDisplayed && !isNaN(value)) {
        display.value = '';
        isResultDisplayed = false;
    }
    
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    isResultDisplayed = false;
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    isResultDisplayed = false;
}

function calculateResult() {
    const display = document.getElementById('display');
    
    try {
        display.value = eval(display.value); // Evaluates the string as a math expression
        isResultDisplayed = true; // Mark that the result is currently displayed
    } catch {
        display.value = 'Error'; // Handles invalid input
        isResultDisplayed = true;
    }
}

// Modified function to handle continued operations after result
function appendOperator(operator) {
    const display = document.getElementById('display');
    
    // If a result is displayed and an operator is pressed, don't clear the result, just continue
    if (isResultDisplayed) {
        isResultDisplayed = false; // Reset the flag so further numbers will clear the display
    }
    
    display.value += operator;
}
