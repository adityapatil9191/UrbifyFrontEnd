import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { ProjectSliderModule } from './project-slider/project-slider.module';
import { RouterModule } from '@angular/router';
import { UploadProjectImagesModule } from '../../edit/upload-project-images/upload-project-images.module';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    ProjectSliderModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
