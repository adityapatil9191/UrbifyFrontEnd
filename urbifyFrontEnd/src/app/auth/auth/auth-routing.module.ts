import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { RegistrationStepperComponent } from './registration-stepper/registration-stepper.component';

export const routes: Routes = [
{
  path: '',
  component: NbAuthComponent,
  children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegistrationStepperComponent,
      },
      {
        path : 'forgotPassword',
        component: ForgotPasswordComponent
      },
      {
        path : 'resetPassword',
        component: ResetPasswordComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class AuthRoutingModule { }
