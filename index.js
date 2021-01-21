var readlineSync = require('readline-sync');
const chalk = require('chalk');
var name = readlineSync.question("Enter your name : ");
console.log("Welcome "+name+" to DO YOU KNOW Shyam?");
console.log("Instructions: Type the option name (a,b,c,d) and press Enter.");
console.log("")
var score = 0;
// play function

function play(quest, ans) {
  var userAnswer = readlineSync.question(quest);

  if(userAnswer === ans) {
    console.log(chalk.greenBright("Right!"));
    score = score + 1;
  } else {
    console.log(chalk.redBright("Wrong!"));
  }
  console.log("Current score: ", score);
  console.log("---------------");
}

// array of objects
var qna = [
  {
  question: "What's my full name? \n a. Shyam Das \n b. Shyam Sundar Singh \n c. Shyam Sundar Jha \n d. Shyam Sundar Misra\n",
  answer: 'c'
  }
,{
  question:"What's my nickname? \n a. Sarad \n b. Saurav \n c. Madhav \n d. Rahul\n",
  answer: 'b'
  },
  {
  question: "What's my age? \n a. <20 yrs \n b. 20-23 \n c. > 23\n",
  answer: 'b'
},{
  question: "Where am I from? \n a.Madhubani \n b.Varanasi \n c.Kota \n d.Patna\n",
  answer: 'a'
},{
  question: "Who is my favourite singer? \n a. Atif \n b. KK \n c. Lucky Ali \n d. Palash Sen \n e. All of them\n",
  answer: 'e'
}]

// loop
for (var i=0; i<qna.length; i++) {
  var currentQuestion = qna[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.bgBlue("Your final Score : ",score));
console.log(chalk.bgBlue("\nCurrent High Score = 4"));
console.log(chalk.blueBright("Send me screenshot if your score is more than current high score"));