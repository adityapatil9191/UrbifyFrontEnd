import { ModalPopUpModule } from './../../shared/modal-pop-up/modal-pop-up.module';
import { DragDropComponent } from './../../shared/drag-drop/drag-drop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbButtonModule, NbAlertModule, NbCheckboxModule, NbInputModule, NbStepperModule, NbDialogModule, NbSelectModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { RegisterProfessionalComponent } from './register-professional/register-professional.component';
import { NbIconModule } from '@nebular/theme';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { RegistrationStepperComponent } from './registration-stepper/registration-stepper.component';
import { DragDropDirective } from 'src/app/shared/drag-drop.directive';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterProfessionalComponent,
    RegistrationStepperComponent,
    DragDropDirective,
    DragDropComponent,
    TermsAndConditionsComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
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
    ModalPopUpModule,
    NgxIntlTelInputModule,
    NbSelectModule,
    NbDialogModule.forChild()
  ]
})
export class AuthModule { }
