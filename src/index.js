import readlineSync from 'readline-sync';

const Welcome = () => console.log('Welcome to the Brain Games!');
const congratulations = (userName) => console.log(`Congratulations, ${userName}!`);
const hi = (userName) => console.log(`Hi, ${userName}!`);

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const method = (rules, func) => {
  Welcome();
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  hi(userName);
  func();
  congratulations(userName);
};

export {
  Welcome, randomNumber, method, congratulations,
};
