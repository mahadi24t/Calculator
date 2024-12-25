const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const decimalButton = document.getElementById('decimal');
const equalButton = document.getElementById('equal');
const buttons = document.querySelectorAll('button');

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetDisplay = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Math Error!";
    return a / b;
}

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.number) {
            appendNumber(button.dataset.number);
        } else if (button.dataset.operator) {
            setOperator(button.dataset.operator);
        } else if (button.id === 'clear') {
            clear();
        } else if (button.id === 'backspace') {
            backspace();
        } else if (button.id === 'equal') {
            evaluate();
        } else if (button.id === 'decimal') {
            appendDecimal();
        }
    });
});

function appendNumber(number) {
    if (display.textContent === '0' || shouldResetDisplay) {
        resetDisplay();
    }
    display.textContent += number;
}

function resetDisplay() {
    display.textContent = '';
    shouldResetDisplay = false;
}

function clear() {
    display.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1) || '0';
}

function appendDecimal() {
    if (shouldResetDisplay) resetDisplay();
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

function setOperator(operator) {
    if (currentOperator !== null) evaluate();
    firstOperand = display.textContent;
    currentOperator = operator;
    shouldResetDisplay = true;
}

function evaluate() {
    if (currentOperator === null || shouldResetDisplay) return;
    if (currentOperator === '/' && display.textContent === '0') {
        display.textContent = "Math Error!";
        return;
    }
    secondOperand = display.textContent;
    display.textContent = roundResult(
        operate(currentOperator, firstOperand, secondOperand)
    );
    currentOperator = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}
