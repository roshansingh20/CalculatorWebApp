let display = document.getElementById("display");
let currentInput = '';
let previousInput = '';

function appendToDisplay(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput || '0';
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (e) {
    currentInput = 'Error';
  }
  updateDisplay();
}
