import { AuthCommonService } from './../auth-common-service.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-email-verified',
  templateUrl: './email-verified.component.html',
  styleUrls: ['./email-verified.component.scss']
})
export class EmailVerifiedComponent implements OnInit {

  constructor(
    public route:ActivatedRoute,
    public authCommonService:AuthCommonService,
    public router: Router
    ) { }
  private emailToken;
  public verificationObject;
  public emailVerified;
  public emailVerifiedFailed;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.emailToken = params.emailToken;
      this.verificationObject = {
        emailToken: this.emailToken
      }
  });
  this.authCommonService.verifyEmail(this.verificationObject).subscribe((data)=>{
    if(data.error === false){
      this.emailVerified = true;
      this.router.navigate(['auth/login']);
    }else{
      this.emailVerifiedFailed = true;
    }
  },
  (err) =>{

    console.log(err);
  }
  );
  }

}
