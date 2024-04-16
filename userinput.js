const prompt = require("prompt-sync")();

const num1 = parseInt(prompt("Insert the first number: "));
const num2 = parseInt(prompt("Insert the second number: "));
const operator = prompt("Please choose your operator(+, -, *, /): ");

if (operator == '+')
{
    sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`)
}
else if (operator == '-')
{
    diff = num1 - num2;
    console.log(`${num1} - ${num2} = ${diff}`)
}
else if (operator == '*')
{
    product = num1 * num2;
    console.log(`${num1} * ${num2} = ${product}`)
}
else if (operator == '/')
{
    if (num1 < 1 || num2 < 1)
    {
        console.log("Invalid operation")
    }
    else
    {
      result = num1 / num2;
      console.log(`${num1} / ${num2} = ${result}`)  
    }
    
}
else
{
    console.log("Invalid!")
}