import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContributionComponent } from './components/add-contribution/add-contribution.component';
import { DonationsListComponent } from './components/donations-list/donations-list.component';


const routes: Routes = [
  // {
  //   path: 'add-donation',
  //   loadChildren: ()=> import('src/app/modules/contribution/contribution.module').then(m => m.ContributionModule)
  // },
  // {
  //   path: 'donations-list',
  //   component: DonationsListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
