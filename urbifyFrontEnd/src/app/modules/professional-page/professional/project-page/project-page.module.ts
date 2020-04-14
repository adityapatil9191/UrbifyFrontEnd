import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsModule } from './project-details/project-details.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectPageComponent
  }
];

@NgModule({
  declarations: [ProjectPageComponent],
  imports: [
    CommonModule,
    ProjectDetailsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectPageModule { }
