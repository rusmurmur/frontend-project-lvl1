import foundationGames from '../index.js';
import takeRandomNum from '../random.js';

const gistGames = 'What is the result of the expression?';

const getCalculationResult = (operand1, randomOperator, operand2) => {
  let result = 0;
  switch (randomOperator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
  }
  return result;
};

export function brainCalc() {
  const operand1 = takeRandomNum(0, 10);
  const operand2 = takeRandomNum(0, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[takeRandomNum(0, operators.length - 1)];
  const question = `${operand1} ${randomOperator} ${operand2}`;

  const correctAnswers = getCalculationResult(operand1, randomOperator, operand2).toString();
  return [question, correctAnswers];
}

const beginningBraincalc = () => foundationGames(gistGames, brainCalc);

export default beginningBraincalc;
