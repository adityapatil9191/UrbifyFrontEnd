import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-free-quote',
  templateUrl: './get-free-quote.component.html',
  styleUrls: ['./get-free-quote.component.scss']
})
export class GetFreeQuoteComponent extends NbRegisterComponent  implements OnInit {
  getFreeQuoteForm: FormGroup;
  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router,
              protected fb: FormBuilder) {
      super(service, options, cd, router);
     }
  fvalue;
  onInitializationOfQuote: Boolean;
  ngOnInit() {
    this.onInitializationOfQuote = true;
    this.getFreeQuoteForm = this.fb.group({
      requirementDescription: ['', Validators.required],
      fullname:  ['', Validators.required],
      PhoneNumber: ['', [Validators.required, Validators.pattern( '^[0-9]*$' )]],
      emailId: ['', [Validators.required, Validators.email]],
      textArea: ['', ]
    } );
    this.fvalue = this.getFreeQuoteForm.controls;
  }
  sendClientDetails() {
    this.onInitializationOfQuote = false;
  }

}
