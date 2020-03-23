import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalsCardComponent } from './professionals-card.component';
import { NbCardModule, NbUserModule, NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [ProfessionalsCardComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbUserModule,
    NbIconModule
  ],
  exports: [
    ProfessionalsCardComponent
  ]
})
export class ProfessionalsCardModule { }
