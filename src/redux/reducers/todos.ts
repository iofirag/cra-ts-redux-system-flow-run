import { SystemOPerations } from "../actions";

interface IAppState {
  value: number;
}
const initialState: IAppState = {
  value: 0
};

export default (state: IAppState = initialState, action) => {
  switch(action.type) {
    case SystemOPerations.update_value:
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}