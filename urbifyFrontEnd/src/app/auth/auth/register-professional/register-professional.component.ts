import { DataSharingService } from './../data-sharing.service';
import { AuthCommonService } from './../auth-common-service.service';
import { Component, OnInit, ChangeDetectorRef, Inject, Output, EventEmitter } from '@angular/core';
import {NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS} from '@nebular/auth';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-professional',
  templateUrl: './register-professional.component.html',
  styleUrls: ['./register-professional.component.scss']
})
export class RegisterProfessionalComponent extends NbRegisterComponent implements OnInit {

  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected fb: FormBuilder,
    public authCommonService: AuthCommonService,
    public dataSharing:DataSharingService,
    public route: ActivatedRoute
    ) {
      super(service, options, cd, router);
    }
  selectedItem = '2';
  professionalRegisterForm;
  fvalue;
  @Output() sendFormValues = new EventEmitter();
  ngOnInit() {
    this.professionalRegisterForm = this.fb.group({
      fullname : ['', [ Validators.required]],
      email : ['', [ Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      professional: ['', Validators.required],
      phnNumber: ['', [ Validators.required, Validators.pattern( '^[0-9]*$' )]],
    },
    { validator: this.matchingPasswords('password', 'repeatPassword')}
    );
    this.fvalue =  this.professionalRegisterForm.controls;
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

registerProfessional() {
    const registerFormData = {
      fullname: this.fvalue.fullname.value,
      email: this.fvalue.email.value,
      password: this.fvalue.password.value,
      phnNumber:this.fvalue.phnNumber.value,
      professional:  this.fvalue.professional.value,
    }
    this.dataSharing.getRegisteredUserData(registerFormData);
    this.router.navigate(['../termsandconditions'], { relativeTo: this.route });
  }

}
