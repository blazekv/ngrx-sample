import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  Reset = '[Counter] Reset',
  Save = '[Counter] Save',
  SaveSuccess = '[Counter] Save Success',
  SaveFail = '[Counter] Save Fail',
  Load = '[Counter] Load',
  LoadSuccess = '[Counter] Load Success',
  LoadFail = '[Counter] Load Fail',
}

export class Increment implements Action {
  readonly type = CounterActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = CounterActionTypes.Reset;
}

export class Save implements Action {
  readonly type = CounterActionTypes.Save;
}

export class SaveSuccess implements Action {
  readonly type = CounterActionTypes.SaveSuccess;
}

export class SaveFail implements Action {
  readonly type = CounterActionTypes.SaveFail;

  constructor(public error: any) {
  }
}

export class Load implements Action {
  readonly type = CounterActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CounterActionTypes.LoadSuccess;

  constructor(public value: number) {
  }
}

export class LoadFail implements Action {
  readonly type = CounterActionTypes.LoadFail;


  constructor(public error: any) {
  }
}


export type CounterActions = Increment | Decrement | Reset
    | Load | LoadSuccess | LoadFail
    | Save | SaveSuccess | SaveFail;
