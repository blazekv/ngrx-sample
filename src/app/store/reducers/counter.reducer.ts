import {CounterActions, CounterActionTypes} from '../action/counter.actions';


export interface CounterState {
  value: number;
  loading: boolean;
}

export const initialState: CounterState = {
  value: 0,
  loading: false,
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

    case CounterActionTypes.Load: {
      return {
        ...state,
        loading: true
      };
    }

    case CounterActionTypes.LoadSuccess: {
      return {
        ...state,
        value: action.value,
        loading: false
      };
    }

    case CounterActionTypes.LoadFail: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
}

export const getCounter = (state: CounterState) => state.value;
