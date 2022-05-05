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

  donations: Donation[] = [];

  constructor(protected http: HttpClient) {
    this.getDonation().subscribe(donations => this.donations = donations);
  }

  getDonation(): Observable<Donation[]> {
    return this.http.get<Donation[]>(`${this.baseUrl}/get`);
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
    },
      err => {
        alert("אופס... התרחשה שגיאה " + err)
      },
      () => alert("תרומה נוספה בהצלחה")
    );
  }

  updateInDonationsList(donation: Donation) {
    this.updateDonation(donation).subscribe(don => {
      console.log(don);
      let index = this.donations.indexOf(this.donations.find(d => don.Id == d.Id));
      this.donations[index] = don;
    },
      err => {
        alert("אופס... התרחשה שגיאה " + err)
      },
      () => alert("תרומה התעדכנה בהצלחה"));;
  }

  getDonationList(): Donation[] {
    return this.donations;
  }
}
