import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'Answer "yes" if the number is even, otherwise answer "no". ';

const isEven = (randomNumber) => randomNumber % 2 === 0;

export function brainEven() {
  const randomNumber = takeRandomNum(1, 50);
  const question = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, question];
}

const beginningBrainEvenGame = () => foundationGames(gistGames, brainEven);

export default beginningBrainEvenGame;
