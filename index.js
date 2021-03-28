// This project is about a quiz to test how much do my friends know about me .It is the part of neogcamp Level 0 assignments .
// This project is live at https://replit.com/@thebtechviral/markoneByAadhar?embed=1&output=1

const readlineSync = require('readline-sync');
const chalk = require('chalk');
const fs = require('fs');
let highscores = require('./highscore.json')

console.log(chalk.bold.green('\n[|||||||||] 100 % START\n'));

let userName = readlineSync.question(chalk.cyanBright.bold('Hey ninja , What is your name ? : '));

if(userName===''){
    userName = 'Guest';
}
console.log(chalk.blue.bold("\nWelcome "+userName));

console.log(chalk.cyanBright.bold('\nNow that you are here , we have a quiz for you to play and assess if you actually Aadhar well .\n'));
