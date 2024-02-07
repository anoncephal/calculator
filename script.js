let num1 = "";
let num2 = "";
let operator = "";
let ans = "";

function displayAns() {
    document.querySelector('.screen').textContent = num1 + operator + num2;
}

document.querySelector('#btn1').addEventListener('click', function() {
    if (operator === '') {
        num1 += '1';
    } else {
        num2 += '1';
    }
    displayAns();
});

document.querySelector('#btn2').addEventListener('click', function() {
    if (operator === '') {
        num1 += '2';
    } else {
        num2 += '2';
    }
    displayAns();
});

document.querySelector('#btn3').addEventListener('click', function() {
    if (operator === '') {
        num1 += '3';
    } else {
        num2 += '3';
    }
    displayAns();
});

document.querySelector('#btn4').addEventListener('click', function() {
    if (operator === '') {
        num1 += '4';
    } else {
        num2 += '4';
    }
    displayAns();
});

document.querySelector('#btn5').addEventListener('click', function() {
    if (operator === '') {
        num1 += '5';
    } else {
        num2 += '5';
    }
    displayAns();
});

document.querySelector('#btn6').addEventListener('click', function() {
    if (operator === '') {
        num1 += '6';
    } else {
        num2 += '6';
    }
    displayAns();
});

document.querySelector('#btn7').addEventListener('click', function() {
    if (operator === '') {
        num1 += '7';
    } else {
        num2 += '7';
    }
    displayAns();
});

document.querySelector('#btn8').addEventListener('click', function() {
    if (operator === '') {
        num1 += '8';
    } else {
        num2 += '8';
    }
    displayAns();
});

document.querySelector('#btn9').addEventListener('click', function() {
    if (operator === '') {
        num1 += '9';
    } else {
        num2 += '9';
    }
    displayAns();
});

document.querySelector('#btn0').addEventListener('click', function() {
    if (operator === '') {
        num1 += '0';
    } else {
        num2 += '0';
    }
    displayAns();
});

document.querySelector('#btnpls').addEventListener('click', function() {
    operator = '+';
    displayAns();
});

document.querySelector('#btnmns').addEventListener('click', function() {
    operator = '-';
    displayAns();
});

document.querySelector('#btnmply').addEventListener('click', function() {
    operator = '*';
    displayAns();
});

document.querySelector('#btndiv').addEventListener('click', function() {
    operator = '/';
    displayAns();
});

document.querySelector('#btneq').addEventListener('click', function() {
    // Convert operands to numbers and perform the operation
    let result;
    if (operator === '+') {
        result = parseInt(num1) + parseInt(num2);
    } else if (operator === '-') {
        result = parseInt(num1) - parseInt(num2);
    } else if (operator === '*') {
        result = parseInt(num1) * parseInt(num2);
    } else {
        result = parseInt(num1) / parseInt(num2);
    }


    // Display the result
    document.querySelector('.screen').textContent = result;

    // Reset operands and operator
    num1 = '';
    num2 = '';
    operator = '';
});