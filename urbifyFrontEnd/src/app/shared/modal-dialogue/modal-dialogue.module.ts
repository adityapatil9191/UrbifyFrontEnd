import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalLoginComponent } from './professional-login/professional-login.component';
import { NbAlertModule, NbCardModule, NbInputModule, NbCheckboxModule, NbButtonModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfessionalLoginComponent],
  imports: [
    CommonModule,
    NbAlertModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    RouterModule,
    NbButtonModule,
    ReactiveFormsModule
  ],
  entryComponents:[ProfessionalLoginComponent],
  exports:[
    ProfessionalLoginComponent
  ]
})
export class ModalDialogueModule { }
