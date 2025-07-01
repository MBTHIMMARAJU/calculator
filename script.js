const inputField = document.getElementById('input');
const outputField = document.getElementById('output');
const modeField = document.getElementById('mode');

let ans = 0;
let mode = 'DEG';

function appendValue(value) {
  inputField.textContent += value;
}

function clearAll() {
  inputField.textContent = '';
  outputField.textContent = '';
}

function modeSetup() {
  mode = (mode === 'DEG') ? 'RAD' : 'DEG';
  modeField.textContent = mode;
}

function calculateResult() {
  try {
    const expression = inputField.textContent;
    const result = math.evaluate(expression);
    ans = result;
    outputField.textContent = result;
  } catch (error) {
    outputField.textContent = 'Error';
  }
}

function calculate(func) {
  let value = parseFloat(inputField.textContent);
  let result;

  if (mode === 'DEG' && ['sin', 'cos', 'tan'].includes(func)) {
    value = value * Math.PI / 180;
  }

  switch(func) {
    case 'sin': result = Math.sin(value); break;
    case 'cos': result = Math.cos(value); break;
    case 'tan': result = Math.tan(value); break;
    case 'log': result = Math.log10(value); break;
    case 'sqrt': result = Math.sqrt(value); break;
    case 'square': result = Math.pow(value, 2); break;
    case 'factorial': result = factorial(value); break;
    default: result = 'Error';
  }

  ans = result;
  outputField.textContent = result;
}

function factorial(n) {
  if (n < 0) return 'Error';
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
} 