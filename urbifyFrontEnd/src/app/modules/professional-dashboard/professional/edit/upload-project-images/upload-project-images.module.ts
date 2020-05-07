import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadProjectImagesComponent } from './upload-project-images.component';
import { NbIconModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { DragAndDropModule } from 'src/app/shared/drag-and-drop/drag-and-drop.module';



@NgModule({
  declarations: [UploadProjectImagesComponent],
  imports: [
    CommonModule,
    DragAndDropModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule
  ],
  exports: [
    UploadProjectImagesComponent
  ]
})
export class UploadProjectImagesModule { }
