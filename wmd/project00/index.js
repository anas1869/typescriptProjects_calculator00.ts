import inquirer from "inquirer";
let { num1, num2, operation } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "please enter your first number",
    }, {
        name: "num2",
        type: "number",
        message: "please enter your second number",
    }, {
        name: "operation",
        type: "list",
        choices: ["addition", "substraction", "multiplication", "division"],
        message: "please enter your age",
    }
]);
// console.log(answers)
if (operation === "addition") {
    console.log(`the sum of two numbers = ${num1 + num2}`);
}
else if (operation === "substraction") {
    console.log(`the diffrence between two numbers = ${num1 - num2}`);
}
else if (operation === "multiplication") {
    console.log(`The multiplication of two numbers = ${num1 * num2}`);
}
else if (operation === "division") {
    console.log(`The division between two numbers = ${num1 / num2}`);
}
