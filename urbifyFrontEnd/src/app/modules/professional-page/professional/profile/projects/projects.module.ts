import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { NbCardModule } from '@nebular/theme';
import { ProjectSliderModule } from './project-slider/project-slider.module';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    NbCardModule,
    ProjectSliderModule,
    CommonModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
