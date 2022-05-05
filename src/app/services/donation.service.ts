import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Donation } from '../models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  addToDonations(donation: Donation) {
    this.addDonation(donation).subscribe(donation => {
      this.donations.push(donation);
    });;
  }
  
  private baseUrl=AppComponent.getBaseUrl()+"/donation";  

  donations : Donation[] = [
    { 
      Id: 1,
      ForeignPoliticalEntityName: 'יישות1',
      DonationSum: "100",
      ForeignPoliticalEntityType: 'מדינה זרה',
      DonationDesignation: 'donationDesignation',
      DonationConditions: 'donationConditions',
      CoinType: 'דולר ארה"ב',
      ExchangeRateType: '3.14'
    },
    { 
      Id: 2,
      ForeignPoliticalEntityName: 'יישות2',
      DonationSum: "1000",
      ForeignPoliticalEntityType: 'מדינה זרה2',
      DonationDesignation: 'donationDesignation',
      DonationConditions: 'donationConditions',
      CoinType: 'דולר ארה"ב',
      ExchangeRateType: 'exchangeRateType'
    }
  ];

  constructor(protected http: HttpClient) { }

  // getDonationsList(): Observable<Donation> {
  // }

  // addDonation(donation:Donation) {
  //    this.donations.push(donation);
  // }

  addDonation(donation:Donation): Observable<Donation> {
    return this.http.post<Donation>(`${this.baseUrl}/add`, donation);
 }
  addToDonationsList(donation: Donation) {
    this.addDonation(donation).subscribe(donation => {
      console.log(donation);
      this.donations.push(donation);
    });
  }

  updateDonation(donation:Donation) {
    //this.donations.push(donation);
    this.addDonation(donation).subscribe(donation => {
      let index =  this.donations.indexOf(this.donations.find(d => donation.Id == d.Id));
      this.donations[index] = donation;
    });;
 }
  
  getDonationList(): Donation[] {
    return this.donations;
  }
}
