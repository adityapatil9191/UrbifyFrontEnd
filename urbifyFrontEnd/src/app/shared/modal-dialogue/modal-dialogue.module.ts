import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalLoginComponent } from './professional-login/professional-login.component';
import { NbAlertModule, NbCardModule, NbInputModule, NbCheckboxModule, NbButtonModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProfessionalLoginComponent],
  imports: [
    CommonModule,
    NbAlertModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    RouterModule,
    NbButtonModule
  ],
  entryComponents:[ProfessionalLoginComponent],
  exports:[
    ProfessionalLoginComponent
  ]
})
export class ModalDialogueModule { }
