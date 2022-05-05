import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Donation } from '../models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  
  private baseUrl=AppComponent.getBaseUrl()+"/donation";  

  donations : Donation[] = [
    { 
      id: 1,
      foreignPoliticalEntityName: 'יישות1',
      donationSum: "100",
      foreignPoliticalEntityType: 'מדינה זרה',
      donationDesignation: 'donationDesignation',
      donationConditions: 'donationConditions',
      coinType: 'דולר ארה"ב',
      exchangeRateType: '3.14'
    },
    { 
      id: 2,
      foreignPoliticalEntityName: 'יישות2',
      donationSum: "1000",
      foreignPoliticalEntityType: 'מדינה זרה2',
      donationDesignation: 'donationDesignation',
      donationConditions: 'donationConditions',
      coinType: 'דולר ארה"ב',
      exchangeRateType: 'exchangeRateType'
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
 

  updateDonation(donation:Donation) {
    //this.donations.push(donation);
    this.addDonation(donation).subscribe(donation => {
      let index =  this.donations.indexOf(this.donations.find(d => donation.id == d.id));
      this.donations[index] = donation;
    });;
 }
  
  getDonationList(): Donation[] {
    return this.donations;
  }
}
