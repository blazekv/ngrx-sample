import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {MessageActionTypes, MessageFail, MessageSuccess} from '../action/message.actions';
import {ToastrService} from 'ngx-toastr';


@Injectable()
export class MessageEffects {



  constructor(private actions$: Actions, private toastrService: ToastrService) {}

  @Effect({dispatch: false})
  success$ = this.actions$.pipe(
      ofType(MessageActionTypes.MessageSuccess),
      tap((action: MessageSuccess) => {
        this.toastrService.success(action.message);
      })
  );

  @Effect({dispatch: false})
  fail$ = this.actions$.pipe(
      ofType(MessageActionTypes.MessageFail),
      tap((action: MessageFail) => {
        this.toastrService.error(action.message);
      })
  );

}
