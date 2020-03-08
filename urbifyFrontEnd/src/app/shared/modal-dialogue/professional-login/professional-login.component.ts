import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional-login',
  templateUrl: './professional-login.component.html',
  styleUrls: ['./professional-login.component.scss']
})
export class ProfessionalLoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder ) { }
  title;
  loginForm:FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
      console.log(this.loginForm);
  }

}
