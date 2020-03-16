import React, { Component } from 'react'
import { StepCondition, StepFlow, StepType, StepChain, StepFunction, StepForLoop } from '../types';
import StepConditionComponent from '../../containers/StepConditionComponent';
import FlowComponent from './FlowComponent';
import StepChainComponent from './StepChainComponent';
import StepFunctionComponent from '../../containers/StepFunctionComponent';
import StepForLoopComponent from './StepForLoopComponent';


interface Props {
  step: StepCondition | StepFlow | StepChain | StepFunction | StepForLoop
}
interface State {

}

export default class StepComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {}
  }

  render() {
    let stepEl;

    if (!this.props.step) {
      return (
        <div>null</div>
      )
    }

    switch(this.props.step.type) {
      case StepType.ConditionStep: {
        const step: StepCondition = this.props.step as StepCondition;
        stepEl = (<StepConditionComponent 
          title={step.title}
          predicate={step.predicate} 
          if_true={step.if_true} 
          if_false={step.if_false}
        />)
        break;
      }
      case StepType.Flow: {
        const step: StepFlow = this.props.step as StepFlow;
        stepEl = (<FlowComponent
          title={step.title}
          steps={step.steps}
        />)
        break;
      }
      case StepType.Chain: {
        const step: StepChain = this.props.step as StepChain;
        stepEl = (<StepChainComponent 
          title={step.title}
          steps={step.steps}
        />)
        break;
      }
      case StepType.FunctionStep: {
        const step: StepFunction = this.props.step as StepFunction;
        stepEl = (<StepFunctionComponent 
          title={step.title}
          function={step.function} 
          args={step.args}
        />)
        break;
      }
      case StepType.ForLoopStep: {
        const step: StepForLoop = this.props.step as StepForLoop;
        stepEl = (<StepForLoopComponent 
          title={step.title}
          step={step.step} 
          items={step.items}
        />)
        break;
      }
    }

    return (
      <div>
        <div>type: {this.props.step.type}</div>
        { stepEl }
        <div>length: {this.props.step.length}</div>
      </div>
    )
  }
}



// switch(this.props.step.type) {
//       case StepType.ConditionStep: {
//         stepEl = (<StepConditionComponent data={this.props.step as StepCondition}/>)
//         break;
//       }
//       case StepType.Flow: {
//         stepEl = (<FlowComponent data={this.props.step as StepFlow} />)
//         break;
//       }
//       case StepType.Chain: {
//         stepEl = (<StepChainComponent data={this.props.step as StepChain} />)
//         break;
//       }
//       case StepType.FunctionStep: {
//         stepEl = (<StepFunctionComponent data={this.props.step as StepFunction} />)
//         break;
//       }
//       case StepType.ForLoopStep: {
//         stepEl = (<StepForLoopComponent data={this.props.step as StepForLoop} />)
//         break;
//       }
//     }