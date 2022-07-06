import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'What is the result of the expression?';

function сonstructionCalc(operand1, randomOperator, operand2) {
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
}

const brainCalc = () => {
  const operand1 = takeRandomNum(0, 10);
  const operand2 = takeRandomNum(0, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[takeRandomNum(0, operators.length - 1)];
  const randomExpression = `${operand1} ${randomOperator} ${operand2}`;

  const correctAnswers = сonstructionCalc(operand1, randomOperator, operand2);
  return [randomExpression, correctAnswers];
};

const beginningBraincalc = () => {
  foundationGames(gistGames, brainCalc);
};

export { brainCalc };
export default beginningBraincalc;
