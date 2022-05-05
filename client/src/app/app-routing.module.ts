import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContributionComponent } from './components/add-contribution/add-contribution.component';
import { DonationsListComponent } from './components/donations-list/donations-list.component';


const routes: Routes = [
  {
    path: '',
    component: AddContributionComponent
  },
  {
    path: 'add-donation',
    component: AddContributionComponent
  },
  {
    path: 'donations-list',
    component: DonationsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
