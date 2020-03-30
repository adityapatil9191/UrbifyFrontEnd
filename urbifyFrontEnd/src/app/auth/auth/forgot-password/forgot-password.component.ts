import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import {NbLoginComponent, NbAuthService, NB_AUTH_OPTIONS} from '@nebular/auth';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends NbLoginComponent implements OnInit {

  forgotPasswordEmail;
  fvalue;
  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected fb: FormBuilder
    ) {
      super(service, options, cd, router);
    }
  ngOnInit() {
    this.forgotPasswordEmail = this.fb.group({
      emailId : ['', [ Validators.required, Validators.email]]
    }
    );
    this.fvalue =  this.forgotPasswordEmail.controls;
  }
  getEmail() {
    console.log(this.fvalue);
  }


}
