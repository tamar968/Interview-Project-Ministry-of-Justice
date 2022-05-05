import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoinType } from 'src/app/enums/coin-type.enum';
import { ForeignPoliticalEntityType } from 'src/app/enums/foreign-political-entity-type.enum';
import { DonationService } from 'src/app/services/donation.service';
import { Donation } from '../../models/donation';

@Component({
  selector: 'app-donation-card',
  templateUrl: './donation-card.component.html',
  styleUrls: ['./donation-card.component.scss']
})
export class DonationCardComponent implements OnInit {

  @Input() donation: Donation;
  public editMode: boolean = false;


  public foreignPoliticalEntityTypes = Object.values(ForeignPoliticalEntityType);
  public coinsTypes = Object.values(CoinType);

  donationForm: FormGroup;

  constructor(protected donationSvc: DonationService) { }

  toggleMode() {
    this.editMode = !this.editMode;
  }

  ngOnInit(): void {

    this.donationForm = new FormGroup({
      id:new FormControl(this.donation.Id),
      foreignPoliticalEntityName: new FormControl(this.donation.ForeignPoliticalEntityName, [Validators.required, Validators.pattern('[a-zA-Z\-\u0590-\u05FF ]+$')]),
      donationSum: new FormControl(this.donation.DonationSum, [Validators.required, Validators.pattern(/\-?\d*\.?\d{1,2}/)]),
      foreignPoliticalEntityType: new FormControl(this.donation.ForeignPoliticalEntityType, [Validators.required]),
      donationDesignation: new FormControl(this.donation.DonationDesignation, [Validators.required]),
      donationConditions: new FormControl(this.donation.DonationConditions),
      coinType: new FormControl(this.donation.CoinType, [Validators.required]),
      exchangeRateType: new FormControl(this.donation.ExchangeRateType, [Validators.required]),
    });
  }


  submit() {
    console.log(this.donationForm.value);
    if (this.donationForm.valid) {
      this.donation = new Donation();
      this.donation.Id = this.donationForm.controls['id'].value;
      this.donation.ForeignPoliticalEntityName = this.donationForm.controls['foreignPoliticalEntityName'].value;
      this.donation.CoinType = this.donationForm.controls['coinType'].value;
      this.donation.DonationDesignation = this.donationForm.controls['donationDesignation'].value;
      this.donation.DonationSum = this.donationForm.controls['donationSum'].value;
      this.donation.ExchangeRateType = this.donationForm.controls['exchangeRateType'].value;
      this.donation.ForeignPoliticalEntityType = this.donationForm.controls['foreignPoliticalEntityType'].value;
      this.donation.DonationConditions = this.donationForm.controls['donationConditions'].value;

      this.donationSvc.updateInDonationsList(this.donation);
      // this.editMode = false;
    }
    else { alert('הטופס אינו חוקי'); }
  }

}
