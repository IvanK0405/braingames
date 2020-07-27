import readlineSync from 'readline-sync';
import { method, randomNumber } from '../index';
import { isprime } from '../engine';

export default function prime() {
  const rules = 'Is this number prime?';
  const primecheck = () => {
    let attempts;
    for (attempts = 0; attempts < 3; attempts += 1) {
      const num = randomNumber(1, 100);
      console.log(num);
      const rightAnswer = isprime(num) ? 'yes' : 'no';
      const output = readlineSync.question('Your answer: ');
      if (rightAnswer === output) {
        console.log('Correct!');
      } else {
        console.log('Wrong!');
      }
    }
  };
  method(rules, primecheck);
}
