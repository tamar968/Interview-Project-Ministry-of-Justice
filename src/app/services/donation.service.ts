import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from '../models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  donations : Donation[] = [
    { 
      foreignPoliticalEntityName: 'יישות 1',
      donationSum: 100,
      foreignPoliticalEntityType: 'מדינה זרה',
      donationDesignation: 'donationDesignation',
      donationConditions: 'donationConditions',
      coinType: 'דולר ארה"ב',
      exchangeRateType: '3.14'
    },
    { 
      foreignPoliticalEntityName: 'יישות 2',
      donationSum: 1000,
      foreignPoliticalEntityType: 'מדינה זרה2',
      donationDesignation: 'donationDesignation',
      donationConditions: 'donationConditions',
      coinType: 'דולר ארה"ב',
      exchangeRateType: 'exchangeRateType'
    }
  ];

  constructor() { }

  // getDonationsList(): Observable<Donation> {
  // }

  addDonation(donation:Donation) {
     this.donations.push(donation);
  }
  
  getDonationList(): Donation[] {
    return this.donations;
  }
}
