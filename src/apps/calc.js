import readlineSync from 'readline-sync';
import { method, randomNumber } from '../index';

export default function calc() {
  const rules = 'What is the result of the expression?';
  const caalc = () => {
    let attempts;
    for (attempts = 0; attempts < 1; attempts += 1) {
      const num1 = randomNumber(0, 100);
      const num2 = randomNumber(0, 50);
      console.log(`${num1} + ${num2}`);
      const summa = num1 + num2;
      const output = readlineSync.question('Your answer: ');
      if (summa === output) {
        console.log('Correct!');
      } else {
        console.log('Wrong!');
      }
      const num3 = randomNumber(0, 100);
      const num4 = randomNumber(0, 50);
      console.log(`${num3} - ${num4}`);
      const minus = num3 - num4;
      const output1 = readlineSync.question('Your answer: ');
      if (minus === output1) {
        console.log('Correct!');
      } else {
        console.log('Wrong!');
      }
      const num5 = randomNumber(0, 100);
      const num6 = randomNumber(0, 10);
      console.log(`${num5} * ${num6}`);
      const multiplication = num5 * num6;
      const output2 = readlineSync.question('Your answer: ');
      if (multiplication === output2) {
        console.log('Correct!');
      } else {
        console.log('Wrong!');
      }
    }
  };
  method(rules, caalc);
}
