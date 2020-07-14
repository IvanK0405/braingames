import readlineSync from "readline-sync";

let Welcome = () => console.log("Welcome to the Brain Games!");

const userName = function () {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
}

const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
};

const method = (rules) => {
 Welcome();
 console.log(rules);
};
  
export { Welcome, userName, randomNumber, method };