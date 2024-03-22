#! /usr/bin/env node
import inquirer from "inquirer";
//Computer se ek random number generate krwana hai.
//User se input lo jis me user ek number guess kray.
//jo user ka number hai or jo computer ne num generate kia wo same hai ya nahi check kro.
//ager same hai tou print ho jaye consol pr congratulation! u win the guessing number.
const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1 to 6",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("CONGRATULATIONS! You WIN, You Guessed The Right Number.");
} else {
  console.log("You LOOSE! You Guessed Wrong Number.");
}
