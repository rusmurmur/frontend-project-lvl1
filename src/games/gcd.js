import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'Find the greatest common divisor of given numbers.';

const getGcd = (operand1, operand2) => {
  let result = operand1;
  while (operand1 % result !== 0 || operand2 % result !== 0) {
    result -= 1;
  }
  return result;
};

export function brainGcd() {
  const operand1 = takeRandomNum(1, 20);
  const operand2 = takeRandomNum(1, 20);

  const question = `${operand1} ${operand2}`;
  const correctAnswers = getGcd(operand1, operand2).toString();

  return [question, correctAnswers];
}

const beginningBrainGcd = () => foundationGames(gistGames, brainGcd);

export default beginningBrainGcd;
