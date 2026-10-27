let num1 = Number(prompt("Enter your first number="));
let op = prompt("Enter operator (+, -, *, /, %):");
let num2 = Number(prompt("Enter your second number="));

switch (op) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(num1 / num2);
        }
        break;
    case "%":
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(num1 % num2);
        }
        break;
    default:
        console.log("Unknown operator");
}