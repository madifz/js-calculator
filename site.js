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
    
    if (!action) {
        console.log('number key!')
    }
    
    if (
        action === 'add' || 
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        console.log('operator key!');
    }
    
    if (action === 'decimal') {
        console.log('decimal key!');
    }
    
    if (action === 'clear') {
        console.log('clear key!');
    }
    
    if (action === 'calculate') {
        console.log('equal key!');
    }
 }
})

