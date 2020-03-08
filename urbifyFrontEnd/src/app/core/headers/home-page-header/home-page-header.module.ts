import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageHeaderComponent } from './home-page-header.component';
import { NbActionsModule } from '@nebular/theme';
import { ModalDialogueModule } from 'src/app/shared/modal-dialogue/modal-dialogue.module';
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [HomePageHeaderComponent],
  imports: [
    CommonModule,
    NbActionsModule,
    ModalDialogueModule,
    RouterModule
  ],
  exports: [HomePageHeaderComponent]
})
export class HomePageHeaderModule { }
