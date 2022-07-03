import readlineSync from 'readline-sync';

const takeRandomNum = () => Math.ceil(Math.random() * 10);

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log("Answer 'yes' if number even otherwise answer 'no'.");

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = takeRandomNum();
    console.log(`Question: ${randomNumber}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0) {
      if (yourAnswer.toLocaleLowerCase() === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answerwas 'yes'.\nLet's try again, ${nameUser}!`);
        return;
      }
    }

    if (randomNumber % 2 !== 0) {
      if (yourAnswer.toLocaleLowerCase() === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${yourAnswer}' is wrong answer ;(. Correct answerwas 'no'.\nLet's try again, ${nameUser}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default brainEven;
