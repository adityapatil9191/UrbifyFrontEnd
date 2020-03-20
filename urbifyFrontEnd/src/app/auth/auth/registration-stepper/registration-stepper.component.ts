import { FileSharingService } from './../../../shared/file-sharing.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-registration-stepper',
  templateUrl: './registration-stepper.component.html',
  styleUrls: ['./registration-stepper.component.scss']
})
export class RegistrationStepperComponent implements OnInit {
  linearMode = true;
  professionalRegisterFormOne: FormGroup;
  imageFiles;
  toggleLinearMode() {
    this.linearMode = !this.linearMode;
  }
  constructor(private fileSharing: FileSharingService) { }

  firstFormValues(e) {
    console.log(e);
  }
  secondFormValues(e) {
    console.log(e);
  }

  getFilesFromAddProjects(e) {
    console.log(e);
    console.log(this.fileSharing.getFiles());
    return;
  }

  ngOnInit() {
  }

}
