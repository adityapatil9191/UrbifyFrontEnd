import { HttpClientModule } from '@angular/common/http';
import { ModalPopUpModule } from './../../shared/modal-pop-up/modal-pop-up.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbButtonModule, NbAlertModule, NbCheckboxModule,
   NbInputModule, NbStepperModule, NbDialogModule, NbSelectModule, NbSpinnerModule, NbCardModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { RegisterProfessionalComponent } from './register-professional/register-professional.component';
import { NbIconModule } from '@nebular/theme';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { DragDropDirective } from 'src/app/shared/drag-drop.directive';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegistrationSuccessfullComponent } from './registration-successfull/registration-successfull.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterProfessionalComponent,
    DragDropDirective,
    TermsAndConditionsComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    RegistrationSuccessfullComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
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
    NbCardModule,
    ModalPopUpModule,
    NgxIntlTelInputModule,
    NbSelectModule,
    NbSpinnerModule,
    NbDialogModule.forChild(),
    NbDialogModule.forChild()
  ]
})
export class AuthModule { }
