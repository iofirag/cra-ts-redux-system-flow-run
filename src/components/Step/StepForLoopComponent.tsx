import React, { Component } from 'react'
import StepComponent from './StepComponent';
import { StepFunction } from '../types';


interface Props {
  title : string,
  step: StepFunction;
  items: number[];
  children?: Node
}
interface State { }

export default class StepForLoopComponent extends Component<Props, State> {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {}
  }

  render() {

    return (
      <div>
        <div>title: {this.props.title}</div>
        {this.props.items.map((item, i) => {
          return (<StepComponent key={i} step={this.props.step} />)
        })}
      </div>
    )
  }
}