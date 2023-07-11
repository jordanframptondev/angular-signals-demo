import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavHeaderComponent} from "./components/nav-header/nav-header.component";
import {AppRoutingModule} from "./app-routing.module";
import {DefaultCounterComponent} from "./components/default-counter/default-counter.component";
import {SignalCounterComponent} from './components/signal-counter/signal-counter.component';
import {CounterPageComponent} from './counter-page/counter-page.component';
import {AsyncPageComponent} from './async-page/async-page.component';
import { RxjsAsyncComponent } from './components/rxjs-async/rxjs-async.component';
import { SignalAsyncComponent } from './components/signal-async/signal-async.component';
import { DocPageComponent } from './doc-page/doc-page.component';
import { RxjsVsSignalsPageComponent } from './rxjs-vs-signals-page/rxjs-vs-signals-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DocPageComponent,
    CounterPageComponent,
    AsyncPageComponent,
    NavHeaderComponent,
    DefaultCounterComponent,
    SignalCounterComponent,
    RxjsAsyncComponent,
    SignalAsyncComponent,
    RxjsVsSignalsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
