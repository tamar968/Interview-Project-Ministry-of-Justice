import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Donation } from '../models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private baseUrl = AppComponent.getBaseUrl() + "/donation";

  donations: Donation[] = [
    // {
    //   Id: 1,
    //   ForeignPoliticalEntityName: 'יישות1',
    //   DonationSum: "100",
    //   ForeignPoliticalEntityType: 'מדינה זרה',
    //   DonationDesignation: 'donationDesignation',
    //   DonationConditions: 'donationConditions',
    //   CoinType: 'דולר ארה"ב',
    //   ExchangeRateType: '3.14'
    // },
    // {
    //   Id: 2,
    //   ForeignPoliticalEntityName: 'יישות2',
    //   DonationSum: "1000",
    //   ForeignPoliticalEntityType: 'מדינה זרה',
    //   DonationDesignation: 'donationDesignation',
    //   DonationConditions: 'donationConditions',
    //   CoinType: 'דולר ארה"ב',
    //   ExchangeRateType: 'exchangeRateType'
    // }
  ];

  constructor(protected http: HttpClient) { 
    this.getDonation().subscribe(donations => this.donations = donations);
  }

  // getDonationsList(): Observable<Donation> {
  // }

  // addDonation(donation:Donation) {
  //    this.donations.push(donation);
  // }

  getDonation():Observable<Donation[]> {
    return this.http.get<Donation[]>(`${this.baseUrl}/get` );
  }
  addDonation(donation: Donation): Observable<Donation> {
    return this.http.post<Donation>(`${this.baseUrl}/add`, donation);
  }
  updateDonation(donation: Donation): Observable<Donation> {
    return this.http.post<Donation>(`${this.baseUrl}/update`, donation);
  }

  addToDonationsList(donation: Donation) {
    this.addDonation(donation).subscribe(donation => {
      console.log(donation);
      this.donations.push(donation);
    });
  }

  updateInDonationsList(donation: Donation) {
    this.updateDonation(donation).subscribe(don => {
      console.log(don);
      let index = this.donations.indexOf(this.donations.find(d => don.Id == d.Id));
      this.donations[index] = don;
    });;
  }

  getDonationList(): Donation[] {
    return this.donations;
  }
}
