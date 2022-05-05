import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/models/donation';
import { DonationService } from 'src/app/services/donation.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddContributionComponent } from '../add-contribution/add-contribution.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.scss']
})
export class DonationsListComponent implements OnInit {

  donationsList: Donation[]
  dialog: any;

  constructor(protected donationSvc: DonationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.donationsList = this.donationSvc.getDonationList();
  }
  addDonation() {
    this.router.navigate(['add-donation']);
  }
}
