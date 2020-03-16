import { Component } from 'react'
import { updateValue } from '../redux/actions';
import { connect } from 'react-redux';
import React from 'react';


interface Props {
  title : string,
  function : string,
  args: any,
  value: number,
  updateValue: (newValue: number) => void
}
interface State { }

class StepFunctionComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {}
  }

  private calculate(operator, args) {
    const {num1, num2} = args;
    return eval(`${num1} ${operator} ${num2}`); /* eslint no-eval: 0 */
  }
  private fibonacci(args) {
    const totalIterations = args.num;
    return fibonacci(totalIterations);
    
    function fibonacci(num){
      let a = 1, b = 0, temp;
    
      while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
      }
    
      return b;
    }
  }

  render() {
    let result;
    Object.keys(this.props.args).forEach(argKey => {
      if (this.props.args[argKey] === '<LastReturnValue>') {
        this.props.args[argKey] = this.props.value
      }
    })
    switch(this.props.title.toUpperCase()) {
      case 'ADD':       
        result = this.calculate('+',this.props.args);
        break;
      case 'SUBTRACT':  
        result = this.calculate('-',this.props.args);
        break;
      case 'MULTIPLY':  
        result = this.calculate('*',this.props.args);
        break;
      case 'FIBONACCI':
        result = this.fibonacci(this.props.args);
        break;
    }
    this.props.updateValue(result);
    return (
      <div>{result}</div>
    )
    // return result;
  }
}

function mapStateToProps(state) {
  return {
    value: state.value
  }
}
function mapDispatchToProps(dispatch) {
  return {
    updateValue: (newValue) => {
      dispatch(updateValue(newValue))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepFunctionComponent)