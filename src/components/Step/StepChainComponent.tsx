import React, { Component } from 'react'
import { StepChain } from '../types';
import StepComponent from './StepComponent';


interface Props {
  title : string,
  steps: StepChain[],
  children?: Node
}
interface State { }

export default class StepChainComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {}
  }

  render() {

    return (
      <div>
        <div>title: {this.props.title}</div>
        { this.props.steps.map((step,i) => {
          console.log(this.props.children)
          return (<StepComponent key={i} step={step} />)
        })}
      </div>
    )
  }
}