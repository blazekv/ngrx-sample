import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CounterComponent} from 'src/app/components/counter/counter.component';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {MatButtonModule, MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from 'src/app/store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    EffectsModule.forRoot(effects),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
