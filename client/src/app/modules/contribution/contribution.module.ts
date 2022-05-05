import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { AddContributionComponent } from 'src/app/components/add-contribution/add-contribution.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonationsListComponent } from 'src/app/components/donations-list/donations-list.component';
import { DonationCardComponent } from 'src/app/components/donation-card/donation-card.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'
import { HttpClientModule } from '@angular/common/http';
import { ContributionRoutingModule } from '../../routes/contribution-routing.module';
@NgModule({
  declarations: [
    AddContributionComponent,
    DonationsListComponent,
    DonationCardComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContributionRoutingModule
  ]
})
export class ContributionModule { }
