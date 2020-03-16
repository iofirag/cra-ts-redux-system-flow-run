export type FlowRun = {
  child_runs: ChildRun[]
  progress: number
  steps_finished: number
  total_steps: number
}

export type ChildRun = {
  step: StepCondition | StepFlow
  child_runs: ChildRun[]
  return_value: number
  run_time: number
}


export type Step = {
  type : string 
  title : string
  length: number
}
export type StepCondition = Step & {//"ConditionStep"
  predicate : string
  if_true: StepFlow
  if_false: StepFlow
}

export type StepFlow = Step & {//"Flow"
  steps: any[]
}
export type StepChain = Step & {// "Chain"
  steps: any[]
}
export type StepFunction = Step & {// "FunctionStep"
  function : string
  args: {}
}
export type StepForLoop = Step & {// "ForLoopStep"
  step: StepFunction
  items: number[]
}

export enum StepType {
  ConditionStep = 'ConditionStep',
  Flow = 'Flow',
  Chain = 'Chain',
  FunctionStep = 'FunctionStep',
  ForLoopStep = 'ForLoopStep'
}