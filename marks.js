const prompt = require("prompt-sync")();

for (let i=0; i<3;i++)
{
let fname = prompt("Enter your name: ");
const mark1 = parseInt(prompt("Enter you first mark: "));
const mark2 = parseInt(prompt("Enter your second mark: "));
const mark3 = parseInt(prompt("Enter your third mark: "));


let sum = mark1 + mark2 + mark3;
let average = sum / 3;
let finalStatus;


if (average < 50)
{
    finalStatus = "Fail"
}
else if (average > 50 && average < 75)
{
    finalStatus = "Pass";
}
else if (average >= 75 && average <= 100)
{
    finalStatus = "Pass with distinction"
}
else if (average > 100)
{
    console.log("Check your inputs")
}
else
{
    console.log("Enter your marks!")
}
console.log(`${fname}, your final mark is ${average}`);
console.log(finalStatus);
}
