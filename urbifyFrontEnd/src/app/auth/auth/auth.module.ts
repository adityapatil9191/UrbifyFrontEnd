import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbButtonModule, NbAlertModule, NbCheckboxModule, NbInputModule, NbStepperModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { RegisterProfessionalComponent } from './register-professional/register-professional.component';
import { NbIconModule } from '@nebular/theme';
import { RegisterProfessionalPagetwoComponent } from './register-professional-pagetwo/register-professional-pagetwo.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { RegistrationStepperComponent } from './registration-stepper/registration-stepper.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterProfessionalComponent,
    RegisterProfessionalPagetwoComponent,
    RegistrationStepperComponent,
    AddProjectsComponent
  ],
  imports: [
    CommonModule,
    NbStepperModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbIconModule,
    NbAuthModule,
    NgxIntlTelInputModule,
  ]
})
export class AuthModule { }
