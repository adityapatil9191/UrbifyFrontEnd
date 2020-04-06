import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { NbCardModule, NbUserModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { ProfessionalsCardModule } from '../professionals-card/professionals-card.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectCardComponent],
  imports: [
    CommonModule,
    ProfessionalsCardModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    RouterModule
  ],
  exports: [
    ProjectCardComponent
  ]
})
export class ProjectCardModule { }
