import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'Answer "yes" if the number is even, otherwise answer "no". ';

const thisEven = (randomNumber) => randomNumber % 2 === 0;

function brainEven() {
  const randomNumber = takeRandomNum(1, 50);
  const questionsAndAnswers = thisEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, questionsAndAnswers];
}

const beginningBrainEvenGame = () => foundationGames(gistGames, brainEven);

export { brainEven };
export default beginningBrainEvenGame;
