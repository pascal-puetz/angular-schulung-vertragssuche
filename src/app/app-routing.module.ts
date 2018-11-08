import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SuchePageComponent} from './pages/suche-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vertragssuche',
    pathMatch: 'full'
  },
  {
    path: 'vertragssuche',
    component: SuchePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
