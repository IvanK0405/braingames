import readlineSync from "readline-sync";
import { method, randomNumber} from "../../index";

function gameone () {
    const rules = 'Answer "yes" if number even otherwise answer "no".';
    method (rules);
    let attempts;
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

export { gameone };