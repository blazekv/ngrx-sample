import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CounterActionTypes, Load, LoadFail, LoadSuccess, SaveFail, SaveSuccess} from '../action/counter.actions';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {CounterService} from '../../services/counter.service';
import {of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {State} from '../reducers';
import {MessageFail, MessageSuccess} from '../action/message.actions';



@Injectable()
export class CounterEffects {



  constructor(
      private actions$: Actions,
      private counterService: CounterService,
      private store: Store<State>
  ) {}

    @Effect()
    load$ = this.actions$.pipe(
        ofType(CounterActionTypes.Load),
        switchMap((action: Load) => {
            return this.counterService.load().pipe(
                map((value) => new LoadSuccess(value)),
                catchError(error => of(new LoadFail(error)))
            );
        })
    );

    @Effect()
    save$ = this.actions$.pipe(
        ofType(CounterActionTypes.Save),
        withLatestFrom(this.store.pipe(select('counter','value'))),
        switchMap(([action,value]: [Load, number]) => {
            return this.counterService.save(value).pipe(
                switchMap(() => [
                    new SaveSuccess(),
                    new MessageSuccess('Counter has been saved')
                ]),
                catchError(error => of(
                    new SaveFail(error),
                    new MessageFail('Counter has not been saved')
                ))
            );
        })
    );



}
