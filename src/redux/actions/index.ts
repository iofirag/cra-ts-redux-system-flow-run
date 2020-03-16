export enum SystemOPerations {
  'update_value',
}

export const updateValue = (value) => {
  return {
    type: SystemOPerations.update_value,
    value
  }
};