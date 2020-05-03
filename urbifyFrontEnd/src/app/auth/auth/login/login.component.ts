import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import {NbLoginComponent, NbAuthService, NB_AUTH_OPTIONS} from '@nebular/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthCommonService } from '../auth-common-service.service';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {
  professionalLoginForm;
  fvalue;
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
  ngOnInit() {
    this.professionalLoginForm = this.fb.group({
      email : ['', [ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]]
    }
    );
    this.fvalue =  this.professionalLoginForm.controls;
  }

  login(){
    const loginObject = {
      email: this.fvalue.email.value,
      password: this.fvalue.password.value
    }
    this.authCommonService.loginUser(loginObject).subscribe((data)=>{
      console.log(data);
    },
    (err)=>{
      console.log(err);
    }
    )
  }

}
