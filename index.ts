#! /usr/bin/env node

import inquirer from "inquirer";

// 1. Computer will generate a number

// 2. Taking in user number

// 3. Compare the results.

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-10:",
  },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You Guessed The Right Number");
} else{
    console.log("Sorry But You Guessed The Wrong Number. Please Guess Again.")
}