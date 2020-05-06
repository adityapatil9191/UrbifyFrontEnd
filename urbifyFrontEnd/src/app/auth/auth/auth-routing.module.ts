import { RegisterProfessionalComponent } from './register-professional/register-professional.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { RegistrationSuccessfullComponent } from './registration-successfull/registration-successfull.component';
import { EmailVerifiedComponent } from './email-verified/email-verified.component';


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
        component: RegisterProfessionalComponent,
      },
      {
        path : 'termsandconditions',
        component: TermsAndConditionsComponent
      },
      {
        path : 'forgotPassword',
        component: ForgotPasswordComponent
      },
      {
        path : 'resetPassword/:emailToken',
        component: ResetPasswordComponent
      },
      {
        path : 'registrationcomplete',
        component: RegistrationSuccessfullComponent
      },
      {
        path: 'verify/:emailToken',
        component: EmailVerifiedComponent
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
