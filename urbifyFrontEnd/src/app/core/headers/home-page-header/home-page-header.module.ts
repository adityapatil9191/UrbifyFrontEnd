import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule } from '@nebular/theme';
import {RouterModule} from '@angular/router';
import { HomePageHeaderComponent } from './home-page-header.component';

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
