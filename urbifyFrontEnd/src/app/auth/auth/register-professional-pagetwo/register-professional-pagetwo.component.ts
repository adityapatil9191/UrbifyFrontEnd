import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-professional-pagetwo',
  templateUrl: './register-professional-pagetwo.component.html',
  styleUrls: ['./register-professional-pagetwo.component.scss']
})
export class RegisterProfessionalPagetwoComponent extends NbRegisterComponent {

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  fvalue;
  professionalRegisterForm:FormGroup;
  constructor(protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected fb:FormBuilder){
    super(service,options,cd,router);
  }

  ngOnInit() {
    this.professionalRegisterForm = this.fb.group({
      degree:['',Validators.required],
      about:['',Validators.required],
      phnNumber:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      fbLink:[''],
      instaLink:[''],
      linkedInLink:['']

    })
    this.fvalue = this.professionalRegisterForm.controls;
  }



}
