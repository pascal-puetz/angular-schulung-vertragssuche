import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsPageComponent} from './pages/details-page/details-page.component';
import {SuchePageComponent} from './pages/suche-page/suche-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vertragssuche',
    pathMatch: 'full'
  },
  {
    path: 'vertragssuche',
    component: SuchePageComponent
  },
  {
    path: 'details/:vnr',
    component: DetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
