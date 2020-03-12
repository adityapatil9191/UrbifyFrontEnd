import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import {NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS} from '@nebular/auth';
import { Router } from '@angular/router';
import  {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-professional',
  templateUrl: './register-professional.component.html',
  styleUrls: ['./register-professional.component.scss']
})
export class RegisterProfessionalComponent extends NbRegisterComponent implements OnInit{
  
  constructor(
    protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected fb:FormBuilder
    ){
    super(service,options,cd,router);
  }
  professionalRegisterForm;
  fvalue
  ngOnInit() {
    this.professionalRegisterForm = this.fb.group({
      fullname : ['',[Validators.required]],
      emailId : ['',[Validators.required,Validators.email]],
      experience: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      password: ['',Validators.required],
      repeatPassword:['',Validators.required]
    },
    { validator: this.matchingPasswords('password', 'repeatPassword')}
    );
    this.fvalue = this.professionalRegisterForm.controls; 
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group): {
        [key: string]: any
    } => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    }
}

  register(){ 
    this.router.navigateByUrl('/auth/registertwo');
  }

}
