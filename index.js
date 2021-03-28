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

console.log(chalk.bold.white.bgBlack('Attention ! Here come the rules'));
console.log(chalk.bold.white.bgBlack('RULE 1 : There will be 10 questions'));
console.log(chalk.bold.white.bgBlack('RULE 2 : Each question carries 1 point for correct answer'));
console.log(chalk.bold.white.bgBlack('RULE 3 : Because we like you so there is no negative marking for wrong answers'));
console.log(chalk.yellow.bgBlack('Ready Steady Go'));

let ready = readlineSync.question(chalk.cyanBright.bold('\n Are you ready for the quiz (yes/no) ? : '));

console.log('\n');

if(ready!='yes'){
    console.log(chalk.bgYellow.bold('So here is a fact for you : "You miss 100% of the shots you dont take" BYE :)\n'));
    process.exit(0);
}

let qalist = [{ques:'What is the full name of my birth state ? : ',crctans:'Uttar Pradesh'},{ques:'What is my age ? : ',crctans:'24'},{ques:'Did I went to IIT Delhi ?(yes/no) : ',crctans:'no'},
{ques:'I have a house but in which city? : ',crctans:'Faridabad'},{ques:'Is my brother named Kartik ?(yes/no) : ',crctans:'yes'},{ques:'Do I own a Wagonr automobile ?(yes/no) : ',crctans:'yes'},{ques:'Am I a fan of Radico Khaitan ?(yes/no) : ',crctans:'yes'},{ques:'Do I speak Gujarati ?(yes/no) : ',crctans:'no'},{ques:'Have I lived in Gujarat ever ?(yes/no) : ',crctans:'yes'},{ques:'Do I have a green card ?(yes/no) : ',crctans:'no'}];

let score = 0;
let questionSeq=1;
function play(question , correctAns){
    let userAns = readlineSync.question("\nQ "+questionSeq+". "+question+'\nANS : ');
    questionSeq++;
    if(userAns === correctAns){
        score += 1;
        console.log(chalk.green("CORRECT !!!!! The score is "+score+" !"));
        return;
    }
    console.log(chalk.red.bold("WRONG !!!!!")," The score is ",score," !");
}

for(let i =0;i<qalist.length;i++){
  let qa = qalist[i];
  play(chalk.bold.black.bgYellowBright(qa.ques) , qa.crctans);
}

console.log(chalk.cyanBright.bold('-----------'));
console.log(chalk.cyanBright.bold('|         |'));
console.log(chalk.cyanBright.bold('| THE END |'));
console.log(chalk.cyanBright.bold('|         |'));
console.log(chalk.cyanBright.bold('-----------'));

if(score>=2){
    console.log(chalk.bold.magenta("Awesome , you answered "+score+" correctly out of 10 questions total\n"));
}else{
    console.log(chalk.bold.bgRed.white(score+"/10 :/ I believe there is still a lifetime left to know each other : D\n"));
}

console.log(chalk.bold.red.bgGreen('Hurrrrayyy ! Quiz is finished and look at you shining in highscores\n'));

