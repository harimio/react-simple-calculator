import * as actions from './actionTypes';

const initialState = {
  display: '',
  operator: '',
  firstOperand: 0,
  secondOperand: null
};

let result;

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_FIRST_OPERAND:
      let newFirstOperand = state.firstOperand
        ? Number(String(state.firstOperand) + String(action.number))
        : Number(action.number);

      const newFirstObject = {
        firstOperand: (String(newFirstOperand).length >= 7 ? 0 : newFirstOperand),
        display: (String(newFirstOperand).length >= 7 ? 'To Large' : String(newFirstOperand)),
      }
      return Object.assign({}, state, newFirstObject);

    case actions.UPDATE_SECOND_OPERAND:
      let newSecondOperand = state.secondOperand
        ? Number(String(state.secondOperand) + String(action.number))
        : Number(action.number);
      const newSecondObject = {
        firstOperand: (String(newSecondOperand).length >= 7 ? 0 : state.firstOperand),
        operator: (String(newSecondOperand).length >= 7 ? '' : state.operator),
        secondOperand: (String(newSecondOperand).length >= 7 ? null : newSecondOperand),
        display: (String(newSecondOperand).length >= 7
          ? 'To Large'
          : state.firstOperand + ' ' + state.operator + ' ' + newSecondOperand),
      }
      return Object.assign({}, state, newSecondObject);
    
    case actions.UPDATE_OPERATOR:
      if (!state.secondOperand) {
        return Object.assign({}, state,{
          operator: action.operator,
          display: state.firstOperand + ' ' + action.operator
        });
      } else {
        return state;
      }

    case actions.EXECUTE_DIVISION:
      result = state.firstOperand / (state.secondOperand || 0);
      result = String(result.toFixed(2));

      return Object.assign({}, state,{
        operator: '',
        firstOperand: 0,
        secondOperand: null,
        display: '= ' + (result.length >= 6 ? 'To Large' : result)
      });

    case actions.EXECUTE_MULTIPLICATION:
      result = state.firstOperand * (state.secondOperand || 0);

      return Object.assign({}, state,{
        operator: '',
        firstOperand: 0,
        secondOperand: null,
        display: '= ' + (String(result).length >= 6 ? 'To Large' : String(result))
      });

    case actions.EXECUTE_ADDITION:
      result = state.firstOperand + (state.secondOperand || 0);

      return Object.assign({}, state,{
        operator: '',
        firstOperand: 0,
        secondOperand: null,
        display: '= ' + result
      });

    case actions.EXECUTE_SUBTRACTION:
      result = state.firstOperand - (state.secondOperand || 0);

      return Object.assign({}, state,{
        operator: '',
        firstOperand: 0,
        secondOperand: null,
        display: '= ' + result
      });

    case actions.RESET:
      return Object.assign({}, state,{
        operator: '',
        firstOperand: 0,
        secondOperand: null,
        display: ''
      });

    default:
      return state;
  }
}
