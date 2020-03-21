import { NbCardModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPopUpComponent } from './modal-pop-up/modal-pop-up.component';



@NgModule({
  declarations: [ModalPopUpComponent],
  imports: [
    CommonModule,
    NbCardModule
  ],
  entryComponents: [ModalPopUpComponent]
})
export class ModalPopUpModule { }
