import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Decrement, Increment, Load, Reset, Save} from 'src/app/store/action/counter.actions';
import {State} from 'src/app/store/reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  value$: Observable<number>;
  loading$: Observable<boolean>;


  constructor(private store: Store<State>) {
    this.value$ = this.store.pipe(select('counter', 'value'));
    this.loading$ = this.store.pipe(select('counter', 'loading'));
  }

  ngOnInit() {
    this.store.dispatch(new Load());
  }

  save() {
    this.store.dispatch(new Save());
  }

  onIncrement() {
    this.store.dispatch(new Increment());
  }

  onDecrement() {
    this.store.dispatch(new Decrement());
  }

  onReset() {
    this.store.dispatch(new Reset());
  }

}
