import { Component, OnInit } from '@angular/core';
import {NbRegisterComponent} from '@nebular/auth';

@Component({
  selector: 'app-register-professional',
  templateUrl: './register-professional.component.html',
  styleUrls: ['./register-professional.component.scss']
})
export class RegisterProfessionalComponent extends NbRegisterComponent {


  ngOnInit() {
  }

}
