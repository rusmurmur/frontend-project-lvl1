import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'Find the greatest common divisor of given numbers.';

const getConstructionNod = (operand1, operand2) => {
  let counter = operand1;
  while (operand1 % counter !== 0 || operand2 % counter !== 0) {
    counter -= 1;
  }
  return counter.toString();
};

export function brainGcd() {
  const operand1 = takeRandomNum(1, 20);
  const operand2 = takeRandomNum(1, 20);

  const randomExpression = `${operand1} ${operand2}`;
  const correctAnswers = getConstructionNod(operand1, operand2);

  return [randomExpression, correctAnswers];
}

const beginningBrainGcd = () => foundationGames(gistGames, brainGcd);

export default beginningBrainGcd;
