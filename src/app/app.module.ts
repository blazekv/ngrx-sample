import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CounterComponent} from 'src/app/components/counter/counter.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from 'src/app/store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DashboardComponent
  ],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
