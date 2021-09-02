let displayNumber = 0;
let storedNumber = 0;
document.getElementById("jsc_display").innerHTML = displayNumber;

const add = function(a, b) {
    
    return a + b;  
};
  
const subtract = function(a, b) {

    return a - b;
};

const multiply = function(a, b) {

    return a * b;
};

const divide = function(a, b) {

    return a / b;
}

const operate = function(operator, num1, num2) {

    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}

const calculator = document.querySelector('.jsc');
const keys = calculator.querySelector('.jsc_keys');

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    
    if (action === '1') {
        displayNumber = 1;
        document.getElementById("jsc_display").innerHTML = displayNumber;
    } else if (action === '2') {
        displayNumber = 2;
        document.getElementById("jsc_display").innerHTML = displayNumber;
    } else if (action === '3') {
        displayNumber = 3;
        document.getElementById("jsc_display").innerHTML = displayNumber;
    } else if (action === '4') {
        displayNumber = 4;
        document.getElementById("jsc_display").innerHTML = displayNumber;
    } else if (action === '5') {
        displayNumber = 5;
        document.getElementById("jsc_display").innerHTML = displayNumber;
    } else if (action === '6') {
        displayNumber = 6;
        document.getElementById("jsc_display").innerHTML = displayNumber;
    } else if (action === '7') {
        displayNumber = 7;
        document.getElementById("jsc_display").innerHTML = displayNumber;
    } else if (action === '8') {
        displayNumber = 8;
        document.getElementById("jsc_display").innerHTML = displayNumber;
    } else if (action === '9') {
        displayNumber = 9;
        document.getElementById("jsc_display").innerHTML = displayNumber;
    } else if (action === '0') {
        displayNumber = 0;
        document.getElementById("jsc_display").innerHTML = displayNumber;
    } else if (action === 'add') {
        
    } else if (action === 'subtract') {
        
    } else if (action === 'multiply') {
        
    } else if (action === 'divide') {
        
    } else if (action === 'decimal') {
        
    } else if (action === 'clear') {
        
    } else if (action === 'calculate') {
        
    } 
 }
})

