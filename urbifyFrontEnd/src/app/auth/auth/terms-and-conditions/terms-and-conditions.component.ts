import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent extends NbRegisterComponent implements OnInit {
  termsAndConditions;
  checkBoxChecked;
  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected fb: FormBuilder
    ) {
      super(service, options, cd, router);
    }
    changeCheckBox(e) {
      if (e.target.checked) {
        this.checkBoxChecked = false;
      } else {
        this.checkBoxChecked = true;
      }
    }

  ngOnInit() {
    this.termsAndConditions = this.fb.group({
      agreeTermsAndConditions: ['', Validators.required]
    });
  }

}
