import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Donation } from 'src/app/models/donation';
import { DonationService } from 'src/app/services/donation.service'
import { Router } from '@angular/router';
import { ForeignPoliticalEntityType } from 'src/app/enums/foreign-political-entity-type.enum';
import { CoinType } from 'src/app/enums/coin-type.enum';

@Component({
  selector: 'app-add-contribution',
  templateUrl: './add-contribution.component.html',
  styleUrls: ['./add-contribution.component.scss']
})
export class AddContributionComponent implements OnInit {

  public foreignPoliticalEntityTypes = Object.values(ForeignPoliticalEntityType);
  public coinsTypes = Object.values(CoinType);

  donationForm = new FormGroup({
    foreignPoliticalEntityName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\-\u0590-\u05FF ]+$')]),
    donationSum: new FormControl('', [Validators.required, Validators.pattern(/\-?\d*\.?\d{1,2}/)]),
    foreignPoliticalEntityType: new FormControl('', Validators.required),
    donationDesignation: new FormControl('', [Validators.required]),
    donationConditions: new FormControl(''),
    coinType: new FormControl('', Validators.required),
    exchangeRateType: new FormControl('', [Validators.required]),
  });


  constructor(protected donationSvc: DonationService,
    private router: Router
  ) { }

  donation: Donation;

  ngOnInit(): void {
  }

  submit() {
    console.log(this.donationForm.value);
    if (this.donationForm.valid) {
      this.donation = new Donation();
      this.donation.ForeignPoliticalEntityName = this.donationForm.controls['foreignPoliticalEntityName'].value;
      this.donation.CoinType = this.donationForm.controls['coinType'].value;
      this.donation.DonationDesignation = this.donationForm.controls['donationDesignation'].value;
      this.donation.DonationSum = this.donationForm.controls['donationSum'].value;
      this.donation.ExchangeRateType = this.donationForm.controls['exchangeRateType'].value;
      this.donation.ForeignPoliticalEntityType = this.donationForm.controls['foreignPoliticalEntityType'].value;
      this.donation.DonationConditions = this.donationForm.controls['donationConditions'].value;

      this.donationSvc.addToDonationsList(this.donation);
      this.router.navigate(['donations-list']);
    }
    else { alert('הטופס אינו חוקי'); }
  }
}
