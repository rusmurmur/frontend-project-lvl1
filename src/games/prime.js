import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  let i = 2;
  while (i < randomNumber) {
    if (randomNumber % i === 0) {
      return false;
    }
    i += 1;
  }
  return randomNumber > 1;
};

export function brainPrime() {
  const randomNumber = takeRandomNum(2, 20);
  const question = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, question];
}

const beginningBrainPrime = () => foundationGames(gistGames, brainPrime);

export default beginningBrainPrime;
