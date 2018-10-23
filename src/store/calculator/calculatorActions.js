import * as actions from './actionTypes';

export function updateFirstOperand(number) {
  return {
    type: actions.UPDATE_FIRST_OPERAND,
    number
  };
}

export function updateOperator(operator) {
  return {
    type: actions.UPDATE_OPERATOR,
    operator
  };
}

export function updateSecondOperand(number) {
  return {
    type: actions.UPDATE_SECOND_OPERAND,
    number
  };
}

export function executeDivision() {
  return {
    type: actions.EXECUTE_DIVISION
  };
}

export function executeMultiplication() {
  return {
    type: actions.EXECUTE_MULTIPLICATION
  };
}

export function executeAddition() {
  return {
    type: actions.EXECUTE_ADDITION
  };
}

export function executeSubtraction() {
  return {
    type: actions.EXECUTE_SUBTRACTION
  };
}

export function reset() {
  return {
    type: actions.RESET
  };
}
