import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageHeaderComponent } from './home-page-header.component';
import { NbActionsModule } from '@nebular/theme';
@NgModule({
  declarations: [HomePageHeaderComponent],
  imports: [
    CommonModule,
    NbActionsModule
  ],
  exports: [HomePageHeaderComponent]
})
export class HomePageHeaderModule { }
