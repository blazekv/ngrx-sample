import { Action } from '@ngrx/store';

export enum MessageActionTypes {
  MessageSuccess = '[Message] Success',
  MessageFail = '[Message] Fail',

  
}

export class MessageSuccess implements Action {
  readonly type = MessageActionTypes.MessageSuccess;


  constructor(public message: string) {
  }
}

export class MessageFail implements Action {
  readonly type = MessageActionTypes.MessageFail;


  constructor(public message: string) {
  }
}


export type MessageActions = MessageSuccess | MessageFail;
