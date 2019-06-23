import {CounterActions, CounterActionTypes} from '../action/counter.actions';


export interface CounterState {
  value: number;
}

export const initialState: CounterState = {
  value: 0
};

export function reducer(state = initialState, action: CounterActions): CounterState {
  switch (action.type) {

    case CounterActionTypes.Increment: {
      return {
        ...state,
        value: state.value + 1
      };
    }

    case CounterActionTypes.Decrement: {
      return {
        ...state,
        value: state.value - 1
      };
    }

    case CounterActionTypes.Reset: {
      return {
        ...state,
        value: 0
      };
    }

    default:
      return state;
  }
}

export const getCounter = (state: CounterState) => state.value;
