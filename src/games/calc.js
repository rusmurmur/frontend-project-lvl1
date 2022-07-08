import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'What is the result of the expression?';

const getConstructionCalc = (operand1, randomOperator, operand2) => {
  let counter = 0;
  switch (randomOperator) {
    case '+':
      counter = operand1 + operand2;
      break;
    case '-':
      counter = operand1 - operand2;
      break;
    case '*':
      counter = operand1 * operand2;
      break;
    default:
  }
  counter = counter.toString();
  return counter;
};

export function brainCalc() {
  const operand1 = takeRandomNum(0, 10);
  const operand2 = takeRandomNum(0, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[takeRandomNum(0, operators.length - 1)];
  const randomExpression = `${operand1} ${randomOperator} ${operand2}`;

  const correctAnswers = getConstructionCalc(operand1, randomOperator, operand2);
  return [randomExpression, correctAnswers];
}

const beginningBraincalc = () => foundationGames(gistGames, brainCalc);

export default beginningBraincalc;
