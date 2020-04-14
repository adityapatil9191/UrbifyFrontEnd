import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { ProjectImageSliderModule } from '../project-image-slider/project-image-slider.module';



@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    CommonModule,
    ProjectImageSliderModule,
    NbCardModule,
    NbIconModule
  ],
  exports: [
    ProjectDetailsComponent
  ]
})
export class ProjectDetailsModule { }
