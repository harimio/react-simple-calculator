import * as actions from './actionTypes';

// Initial state and data structure of the app.
const initialState = {
  numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
  operations: [{
    name: 'division',
    symbol: '÷'
  }, {
    name: 'multiplication',
    symbol: 'x'
  }, {
    name: 'addition',
    symbol: '+'
  }, {
    name: 'subtraction',
    symbol: '-'
  }],
  firstOperand: null,
  secondOperand: null,
  currentOperation: null,
  operationSelected: false,
  result: null
};

let result = null;

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_FIRST_OPERAND:
      return Object.assign({}, state, { firstOperand: action.number });

    case actions.UPDATE_SECOND_OPERAND:
      return Object.assign({}, state, { secondOperand: action.number });

    case actions.UPDATE_OPERATOR:
      return Object.assign({}, state, {
        currentOperation: action.operation,
        operationSelected: true
      });

    case actions.EXECUTE_DIVISION:
      result = state.firstOperand / state.secondOperand;
      return Object.assign({}, state, { result });

    case actions.EXECUTE_MULTIPLICATION:
      result = state.firstOperand * state.secondOperand;
      return Object.assign({}, state, { result });

    case actions.EXECUTE_ADDITION:
      result = state.firstOperand + state.secondOperand;
      return Object.assign({}, state, { result });

    case actions.EXECUTE_SUBTRACTION:
      result = state.firstOperand - state.secondOperand;
      return Object.assign({}, state, { result });

    case actions.RESET:
      return Object.assign({}, state, {
        firstOperand: null,
        secondOperand: null,
        currentOperation: null,
        operationSelected: false,
        result: null
      });

    default:
      return state;
  }
}
