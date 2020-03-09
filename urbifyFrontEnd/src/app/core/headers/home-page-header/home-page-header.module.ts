import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageHeaderComponent } from './home-page-header.component';
import { NbActionsModule } from '@nebular/theme';
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [HomePageHeaderComponent],
  imports: [
    CommonModule,
    NbActionsModule,
    RouterModule
  ],
  exports: [HomePageHeaderComponent]
})
export class HomePageHeaderModule { }
