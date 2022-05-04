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

 @Input() donation:Donation;
 public editMode:boolean = false;

 
 public foreignPoliticalEntityTypes = Object.values(ForeignPoliticalEntityType);
 public coinsTypes = Object.values(CoinType);
 
  donationForm: FormGroup;

  constructor( protected donationSvc: DonationService) { }

  toggleMode(){
    this.editMode = !this.editMode;
  }

  ngOnInit(): void {
    
  this.donationForm = new FormGroup({
    foreignPoliticalEntityName: new FormControl(this.donation.foreignPoliticalEntityName, [Validators.required, Validators.pattern('[a-zA-Z\-\u0590-\u05FF ]+$')]),
    donationSum : new FormControl(this.donation.donationSum, [Validators.required, Validators.pattern(/\-?\d*\.?\d{1,2}/)]),
    foreignPoliticalEntityType : new FormControl(this.donation.foreignPoliticalEntityType, [Validators.required]),
    donationDesignation : new FormControl(this.donation.donationDesignation, [Validators.required]),
    donationConditions: new FormControl(this.donation.donationConditions),
    coinType : new FormControl(this.donation.coinType, [Validators.required]),
    exchangeRateType : new FormControl(this.donation.exchangeRateType, [Validators.required]),
    });
  }

 
  submit(){
    console.log(this.donationForm.value);
    if(this.donationForm.valid){
      this.donation = new Donation();
      this.donation.foreignPoliticalEntityName = this.donationForm.controls['foreignPoliticalEntityName'].value;
      this.donation.coinType = this.donationForm.controls['coinType'].value;
      this.donation.donationDesignation = this.donationForm.controls['donationDesignation'].value;
      this.donation.donationSum = parseInt(this.donationForm.controls['donationSum'].value);
      this.donation.exchangeRateType = this.donationForm.controls['exchangeRateType'].value;
      this.donation.foreignPoliticalEntityType = this.donationForm.controls['foreignPoliticalEntityType'].value;
      this.donation.donationConditions = this.donationForm.controls['donationConditions'].value;

      this.donationSvc.updateDonation(this.donation);
    }
    else{ alert('הטופס אינו חוקי'); }
  }
 
}
