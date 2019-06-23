import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from 'src/environments/environment';
import {CounterState, reducer} from 'src/app/store/reducers/counter.reducer';

export const counterModule = 'counterModule';

export interface State {
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: reducer
};

export const getFeatureWorkersState = createFeatureSelector<State>(
    counterModule
);

export const getCounterStateSelector = createSelector(
    getFeatureWorkersState,
    (state: State) => state.counter
);


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
