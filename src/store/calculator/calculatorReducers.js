import * as actions from './actionTypes';

const initialState = {
  display: 0,
  firstOperand: 0,
  secondOperand: 0
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_FIRST_OPERAND:
      return {};

    case actions.UPDATE_SECOND_OPERAND:
      return {};

    case actions.EXECUTE_DIVISION:
      return {};

    case actions.EXECUTE_MULTIPLICATION:
      return {};

    case actions.EXECUTE_ADDITION:
      return {};

    case actions.EXECUTE_SUBTRACTION:
      return {};

    case actions.RESET:
      return {};

    default:
      return state;
  }
}
