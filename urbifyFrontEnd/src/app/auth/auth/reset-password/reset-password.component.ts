import { Component, OnInit, ChangeDetectorRef, Inject, Output, EventEmitter } from '@angular/core';
import {NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS} from '@nebular/auth';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { AuthCommonService } from './../auth-common-service.service';
import { ModalPopUpComponent } from 'src/app/shared/modal-pop-up/modal-pop-up/modal-pop-up.component';
import { NbDialogService } from '@nebular/theme';

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
    protected fb: FormBuilder,
    public route:ActivatedRoute,
    public AuthService:AuthCommonService,
    private dialogService: NbDialogService,
    ) {
      super(service, options, cd, router);
    }
    private emailToken;
    public resetPasswordForm;
    public fvalue;
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.emailToken = params.emailToken;
    });
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
  submitNewPassword() {
    const passwordObject = {
      emailToken: this.emailToken,
      password: this.fvalue.password.value
    }
    this.AuthService.resetPassword(passwordObject).subscribe(
      (data)=>{
        if(data.error === false){
          this.dialogService.open(ModalPopUpComponent, {
              context: {
                title: data.message,
              },
            });
          this.router.navigate(['auth/login']);
        }
      },
      (error)=>{
        this.dialogService.open(ModalPopUpComponent, {
          context: {
            title: error.message,
          },
        });
      }
    )
  }
}
