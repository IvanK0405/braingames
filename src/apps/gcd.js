import readlineSync from "readline-sync";
import { method, randomNumber,} from "../index";

export function gcd () {
    const rules = 'Find the greatest common divisor of given numbers.';
    const nod = () => {
        let attempts;
        for (attempts = 0; attempts < 3; attempts++){
        const num1 = randomNumber(1, 10);
        const num2 = randomNumber(1, 10);
        const pair = (number1, number2) => console.log(`Question:  ${number1} & ${number2}`);
        pair(num1, num2);
        const NOD = (x, y) => {
            if (y > x) return NOD(y, x);
            if (!y) return x;
            return NOD(y, x % y);
          };
          const div = NOD(num1, num2);
          const answer = +(readlineSync.question('Your answer: '));
          const comparison = (x, y) => {
            if (x === y) console.log('Correct!');
            else console.log('Wrong!');
        };
        comparison(div, answer);
    }

}
    method (rules, nod);
}