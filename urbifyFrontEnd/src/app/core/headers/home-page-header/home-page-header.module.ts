import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule } from '@nebular/theme';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbActionsModule,
    RouterModule
  ],
  exports: []
})
export class HomePageHeaderModule { }
