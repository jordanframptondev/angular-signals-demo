import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterPageComponent} from "./counter-page/counter-page.component";
import {AsyncPageComponent} from "./async-page/async-page.component";
import {DocPageComponent} from "./doc-page/doc-page.component";
import {RxjsVsSignalsPageComponent} from "./rxjs-vs-signals-page/rxjs-vs-signals-page.component";

const routes: Routes = [
  {
    path: '',
    component: DocPageComponent
  },
  {
    path: 'doc',
    component: DocPageComponent
  },
  {
    path: 'counter',
    component: CounterPageComponent
  },
  {
    path: 'async',
    component: AsyncPageComponent
  },
  {
    path: 'rxjs-vs-signals',
    component: RxjsVsSignalsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
