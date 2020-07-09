var readlineSync = require('readline-sync');

function userName() {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
}

export default userName;
