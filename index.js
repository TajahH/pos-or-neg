// Write a program that takes an integer as input and determines whether it's positive, negative, or zero. 
//You should use else if statements to test each condition and print out a message indicating the result.

function integerCheck(){
    const readline = require("readline-sync");
    let userInput = parseInt (readline.question(`Write the number you would like to check as positive, negative or zero: `))

    if (userInput === 0){
        console.log("This number is zero");
    } else if (userInput % 2 === 0){
        console.log("This number is positive");
    } else {
        console.log("This number is negative")
    }
}

integerCheck();