import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContributionComponent } from './components/add-contribution/add-contribution.component';

const routes: Routes = [
  {
    path: '',
    component: AddContributionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
