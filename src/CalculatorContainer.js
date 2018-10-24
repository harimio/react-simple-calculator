import { connect } from 'react-redux';
import Calculator from './Calculator';
import {  updateFirstOperand,
          updateSecondOperand,
          updateOperator,
          executeDivision,
          executeMultiplication,
          executeAddition,
          executeSubtraction,
          reset } from './store/calculator/calculatorActions';

const mapStateToProps = (state) => ({
  numbers: state.numbers,
  operations: state.operations,
  firstOperand: state.firstOperand,
  secondOperand: state.secondOperand,
  currentOperation: state.currentOperation,
  operationSelected: state.operationSelected,
  result: state.result
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateFirstOperand: (number) => dispatch(updateFirstOperand(number)),
  onUpdateSecondOperand: (number) => dispatch(updateSecondOperand(number)),
  onUpdateOperator: (operation) => dispatch(updateOperator(operation)),
  onExecuteOperation: (operation) => {
    const action = {
      'division': executeDivision(operation),
      'multiplication': executeMultiplication(operation),
      'addition': executeAddition(operation),
      'subtraction': executeSubtraction(operation),
      'clear': reset()
    };
    dispatch(action[operation.name]);
  },
  onReset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
