import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NbRadioModule, NbIconModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    NbRadioModule,
    NbIconModule,
    FormsModule
  ],
  exports: [
    SideBarComponent,
  ]
})
export class SideBarModule { }
