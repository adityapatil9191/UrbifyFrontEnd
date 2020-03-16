import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-stepper',
  templateUrl: './registration-stepper.component.html',
  styleUrls: ['./registration-stepper.component.scss']
})
export class RegistrationStepperComponent implements OnInit {
  linearMode = true;
  professionalRegisterFormOne: FormGroup;
  toggleLinearMode() {
    this.linearMode = !this.linearMode;
  }
  constructor() { }

  firstFormValues(e) {
    console.log(e);
  }
  secondFormValues(e) {
    console.log(e);
  }
  ngOnInit() {
  }

}
