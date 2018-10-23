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
  display: state.display,
  firstOperand: state.firstOperand,
  secondOperand: state.secondOperand
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateFirstOperand: (number) => {    
    dispatch(updateFirstOperand(number));
  },
  onUpdateOperator: (operator) => {    
    dispatch(updateOperator(operator));
  },
  onUpdateSecondOperand: (number) => {
    dispatch(updateSecondOperand(number));
  },
  onExecuteOperation: (operation) => {
    const action = {
      'division': executeDivision(operation),
      'multiplication': executeMultiplication(operation),
      'addition': executeAddition(operation),
      'subtraction': executeSubtraction(operation),
      'clear': reset()
    };

    dispatch(action[operation]);
    
  },
  onReset: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
