var readlineSync = require('readline-sync');

export function userName() {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
}

const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
};
  
export function gameone () {
      var attempts;
      for (attempts = 0; attempts < 3; attempts++){
      let question = randomNumber(1,100);
      console.log(question);
      let num = readlineSync.question ( 'What is your answer? (y/n)');
      if (question % 2 == 0 && num == 'y'){
          console.log ('Correct!');
      } 
       else if (question % 2 == 0 && num == 'n'){
          console.log ('Correct!');
       }
       else if (( question % 2 != 0 && num === 'y ') || ( question % 2 == 0 && num == 'n' )){
            console.log ('Wrong answer!');
        }
        else {
            console.log ('It`s wrong input');
        }
    }
}