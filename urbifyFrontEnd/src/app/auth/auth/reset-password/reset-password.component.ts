import { Component, OnInit, ChangeDetectorRef, Inject, Output, EventEmitter } from '@angular/core';
import {NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS} from '@nebular/auth';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends NbRegisterComponent implements OnInit {

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected fb: FormBuilder
    ) {
      super(service, options, cd, router);
    }

    resetPasswordForm;
    fvalue;
    ngOnInit() {
      this.resetPasswordForm = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
        repeatPassword: ['', [Validators.required,Validators.minLength(4), Validators.maxLength(40)]]
      },
      { validator: this.matchingPasswords('password', 'repeatPassword')}
      );
      this.fvalue =  this.resetPasswordForm.controls;
    }
matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
      return (group): {
          [key: string]: any
      } => {
          const password = group.controls[passwordKey];
          const confirmPassword = group.controls[confirmPasswordKey];

          if (password.value !== confirmPassword.value) {
              return {
                  mismatchedPasswords: true
              };
          }
      };
  }
  submitNewPassword() {}
}
