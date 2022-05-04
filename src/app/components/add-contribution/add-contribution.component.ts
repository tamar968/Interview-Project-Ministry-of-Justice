import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Donation } from 'src/app/models/donation'
@Component({
  selector: 'app-add-contribution',
  templateUrl: './add-contribution.component.html',
  styleUrls: ['./add-contribution.component.scss']
})
export class AddContributionComponent implements OnInit {

  donationForm = new FormGroup({
    foreignPoliticalEntityName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\-\u0590-\u05FF ]+$')]),
    donationSum : new FormControl('', [Validators.required, Validators.pattern(/\-?\d*\.?\d{1,2}/)]),
    foreignPoliticalEntityType : new FormControl('', [Validators.required]),
    donationDesignation : new FormControl('', [Validators.required]),
    donationConditions: new FormControl(''),
    coinType : new FormControl('', [Validators.required]),
    exchangeRateType : new FormControl('', [Validators.required]),
    });


  constructor() { }

 donation: Donation;

  ngOnInit(): void {
  }

  submit(){
    console.log(this.donationForm.value)
  }
}
