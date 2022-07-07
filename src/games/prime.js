import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const сonstructioPrime = (randomNumber) => {
  let i = 2;
  while (i < randomNumber) {
    if (randomNumber % i === 0) {
      return false;
    }
    i += 1;
  }
  return randomNumber > 1;
};

function brainPrime() {
  const randomNumber = takeRandomNum(2, 20);
  const questionsAndAnswers = сonstructioPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, questionsAndAnswers];
}

const beginningBrainPrime = () => foundationGames(gistGames, brainPrime);

export { brainPrime };
export default beginningBrainPrime;
