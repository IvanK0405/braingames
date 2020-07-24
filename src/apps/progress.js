import readlineSync from 'readline-sync';
import { method, randomNumber } from '../index';
import { arifprog } from '../engine';

export default function progr() {
  const rules = 'What number is missing in this progression?';
  const completion = () => {
    let attempts;
    for (attempts = 0; attempts < 3; attempts += 1) {
      const num1 = randomNumber(0, 9);
      const num2 = randomNumber(2, 10);
      const row = arifprog(num1, num2);
      const correctanswer = row[num1];
      const newrow = row.map((arr) => (arr === row[num1] ? '..' : arr));
      const newrowprint = newrow.toString().replace(/,/g, ' ');
      console.log(newrowprint);
      const output = readlineSync.question('Your answer: ');
      if (correctanswer === output) {
        console.log('Correct!');
      } else {
        console.log('Wrong!');
      }
    }
  };
  method(rules, completion);
}
