import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details.component';
import { NbCardModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { ProjectImageSliderModule } from '../project-image-slider/project-image-slider.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UploadProjectImagesModule } from '../../edit/upload-project-images/upload-project-images.module';


@NgModule({
  declarations: [ProjectDetailsComponent],
  imports: [
    CommonModule,
    ProjectImageSliderModule,
    UploadProjectImagesModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    CKEditorModule
  ],
  exports: [
    ProjectDetailsComponent
  ]
})
export class ProjectDetailsModule { }
