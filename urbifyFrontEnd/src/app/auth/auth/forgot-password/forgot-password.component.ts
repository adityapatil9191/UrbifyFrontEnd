import { AuthCommonService } from './../auth-common-service.service';
import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import {NbLoginComponent, NbAuthService, NB_AUTH_OPTIONS} from '@nebular/auth';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { ModalPopUpComponent } from 'src/app/shared/modal-pop-up/modal-pop-up/modal-pop-up.component';

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
    protected fb: FormBuilder,
    public authService: AuthCommonService,
    public dialogService:NbDialogService
    ) {
      super(service, options, cd, router);
    }
  ngOnInit() {
    this.forgotPasswordEmail = this.fb.group({
      email : ['', [ Validators.required, Validators.email]]
    }
    );
    this.fvalue =  this.forgotPasswordEmail.controls;
  }
  getEmail() {
    const email = {
      email: this.fvalue.email.value,
    }
    this.authService.forgotPassword(email).subscribe((data)=>{
      if(data.error === false){
        this.dialogService.open(ModalPopUpComponent, {
          context: {
            title: 'Please check your email for password reset link.',
          },
        });
      }
      console.log(data);
    },
    (err)=>{
      if(err.error.error === true){
        this.dialogService.open(ModalPopUpComponent, {
          context: {
            title: err.error.message,
          },
        });
      }
      console.log(err);
    }

    )
  }


}
