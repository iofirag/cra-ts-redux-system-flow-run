import React, { Component } from 'react'
import { StepFlow } from '../types';
import StepComponent from './StepComponent';


interface Props {
  // data: StepFlow
  title : string,
  steps: StepFlow[],
  children?: Node
}
interface State { }

export default class FlowComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {}
  }

  render() {

    return (
      <div>
        <div>title: {this.props.title}</div>
        { this.props.steps.map((step, i) => {
          return (<StepComponent key={i} step={step} />)
        })}
      </div>
    )
  }
}