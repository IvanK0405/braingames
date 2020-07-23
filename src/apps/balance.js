import readlineSync from 'readline-sync';
import { method, randomNumber } from '../index';

export default function Balance() {
  const rules = 'Balance the given number';
  const bal = () => {
    let attempts;
    for (attempts = 0; attempts < 3; attempts += 1) {
      const number = randomNumber(100, 1000);
      console.log(`${number}`);
      const sum = (num) => {
        let result = 0;
        const stringNum = String(num);
        for (let i = 0; i < stringNum.length; i += 1) {
          result += Number(stringNum[i]);
        }
        return result;
      };

      const balanceNumber = (num) => {
        let sumNumber = sum(num);
        const stringNum = String(num);
        let balancedNumber = '';
        for (let i = stringNum.length; i > 0; i -= 1) {
          balancedNumber += Math.floor(sumNumber / i);
          sumNumber -= Math.floor(sumNumber / i);
        }

        return balancedNumber;
      };
      const div = balanceNumber(number);
      const answer = +(readlineSync.question('Your answer: '));
      const comparison = (x, y) => {
        if (x === y) console.log('Correct!');
        else console.log('Wrong!');
      };
      comparison(div, answer);
    }
  };
  method(rules, bal);
}
