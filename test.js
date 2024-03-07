const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

rl.question('Enter the first number: ', (answer1) => {
    rl.question('Enter the second number: ', (answer2) => {
        const a = parseFloat(answer1);
        const b = parseFloat(answer2);

        console.log(`The sum of the numbers is: ${add(a, b)}`);
        console.log(`The difference of the numbers is: ${subtract(a, b)}`);
        console.log(`The product of the numbers is: ${multiply(a, b)}`);
        console.log(`The quotient of the numbers is: ${divide(a, b)}`);

        rl.close();
    });
});