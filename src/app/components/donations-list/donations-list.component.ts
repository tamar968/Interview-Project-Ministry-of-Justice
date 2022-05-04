import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/models/donation';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.scss']
})
export class DonationsListComponent implements OnInit {

  donationsList : Donation[]
  
  constructor( protected donationSvc: DonationService) { }

  ngOnInit(): void {
    this.donationsList = this.donationSvc.getDonationList();
  }

}
