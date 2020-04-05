import { Component, OnInit, Inject, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})
export class AddProjectsComponent extends NbRegisterComponent implements OnInit {
  fvalue;
  projectRegisterForm;
  @Output() registerProjectFormValues = new EventEmitter();
  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router,
              protected fb: FormBuilder) {
super(service, options, cd, router);
}

registerProjects(){}
addAnotherProject(){
  this.registerProjectFormValues.emit(this.fvalue);
}

  ngOnInit() {
    this.projectRegisterForm = this.fb.group({
      projectTitle: ['', Validators.required],
      projectLocation: ['', Validators.required],
      completedWithinMonths:  ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      projectDescription: ['', Validators.required],
      projectBudget: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      projectImages: ['',Validators.required ]
    } );
    this.fvalue = this.projectRegisterForm.controls;
  }

}
