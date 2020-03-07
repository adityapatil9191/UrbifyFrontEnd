import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalLoginComponent } from './professional-login/professional-login.component';
import { NbAlertModule, NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [ProfessionalLoginComponent],
  imports: [
    CommonModule,
    NbAlertModule,
    NbCardModule
  ],
  entryComponents:[ProfessionalLoginComponent],
  exports:[
    ProfessionalLoginComponent
  ]
})
export class ModalDialogueModule { }
