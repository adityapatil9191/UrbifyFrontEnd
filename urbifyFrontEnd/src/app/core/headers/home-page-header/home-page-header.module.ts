import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageHeaderComponent } from './home-page-header.component';
import { NbActionsModule } from '@nebular/theme';
import { ModalDialogueModule } from 'src/app/shared/modal-dialogue/modal-dialogue.module';
@NgModule({
  declarations: [HomePageHeaderComponent],
  imports: [
    CommonModule,
    NbActionsModule,
    ModalDialogueModule
  ],
  exports: [HomePageHeaderComponent]
})
export class HomePageHeaderModule { }
