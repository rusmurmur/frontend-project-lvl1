import readlineSync from 'readline-sync';

const foundationGames = (gistGames, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);

  console.log(gistGames);

  const counterRound = 3;
  for (let i = 0; i < counterRound; i += 1) {
    const [questions, correctAnswers] = questionsAndAnswers();
    console.log(`Question: ${questions}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer.toLocaleLowerCase() !== correctAnswers) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswers}.\nLet's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default foundationGames;
