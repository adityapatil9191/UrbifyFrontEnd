import { ModalPopUpComponent } from './../../../shared/modal-pop-up/modal-pop-up/modal-pop-up.component';
import { AuthCommonService } from './../services/auth-common-service.service';
import { DataSharingService } from './../services/data-sharing.service';
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
  sharedForm;
  sharedFormValues;
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
    this.sharedForm = this.dataSharing.registerFormData$.subscribe((data)=>{
      if(data){
        data.termsAndConditions = this.termsAndConditions.controls.agreeTermsAndConditions.value;
        this.sharedFormValues = data;
      }else{
        this.sharedFormValues = null;
      }
    })
  }
  finishRegistration() {
    this.http.registerUser(this.sharedFormValues).subscribe((info)=>{
      console.log(info);
    if(info){
      if(info.error === false && info.message){
        this.router.navigate(['../registrationcomplete'], { relativeTo: this.route });
      }else{
        this.dialogService.open(ModalPopUpComponent, {
          context: {
            title: info.message,
          },
        });
      }
    }

  },
  (err)=>{
    console.log(err);
  }
  )

  this.sharedForm.unsubscribe();
  }

}
