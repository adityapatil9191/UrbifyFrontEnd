import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalComponent } from './professional.component';
import { NbCardModule, NbActionsModule, NbIconModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { UploadCoverPhotoComponent } from './edit/upload-cover-photo/upload-cover-photo.component';
import { DragAndDropModule } from 'src/app/shared/drag-and-drop/drag-and-drop.module';
import { UploadProfilePicComponent } from './edit/upload-profile-pic/upload-profile-pic.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const routes: Routes = [
  {
    path: '',
    component: ProfessionalComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'new-project',
        loadChildren: () => import('./project-page/project-page.module').then(m => m.ProjectPageModule)
      },
      {
        path: 'projectid',
        loadChildren: () => import('./project-page/project-page.module').then(m => m.ProjectPageModule)
      }
    ]
  }
];


@NgModule({
  declarations: [ProfessionalComponent, UploadCoverPhotoComponent, UploadProfilePicComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbActionsModule,
    NbIconModule,
    NbButtonModule,
    DragAndDropModule,
    CKEditorModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NbCardModule
  ]
})
export class ProfessionalModule { }
