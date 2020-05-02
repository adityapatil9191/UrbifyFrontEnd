import { AuthCommonService } from './../auth-common-service.service';
import { DataSharingService } from './../data-sharing.service';
import { Component, OnInit, ChangeDetectorRef, Inject,ChangeDetectionStrategy } from '@angular/core';
import { NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';


@Component({
  selector: 'app-terms-and-conditions',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    protected fb: FormBuilder,
    private dialogService: NbDialogService,
    public dataSharing: DataSharingService,
    public http:AuthCommonService,
    public route: ActivatedRoute
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
  finishRegistration() {
    const formSharing = this.dataSharing.registerFormData$.subscribe((data)=>{
      if(data){
        data.termsAndConditions = this.termsAndConditions.controls.agreeTermsAndConditions.value;
        this.http.registerUser(data).subscribe((info)=>{
        if(info.error === false){
          this.router.navigate(['../registrationcomplete'], { relativeTo: this.route });
        }else{
          alert(info.message);
        }

      },
      (err)=>{
        console.log(err);
      }
      )
      }else{
        alert('Please register yourself first!!');
      }

    },
    (err)=>{
      console.log(err);
    }
    )

    formSharing.unsubscribe();
  }

}
