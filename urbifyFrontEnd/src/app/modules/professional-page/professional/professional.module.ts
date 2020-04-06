import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalComponent } from './professional.component';
import { NbCardModule, NbActionsModule, NbIconModule, NbLayoutModule } from '@nebular/theme';

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
        path: 'projectid',
        loadChildren: () => import('./project-page/project-page.module').then(m => m.ProjectPageModule)
      }
    ]
  }
];


@NgModule({
  declarations: [ProfessionalComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbActionsModule,
    NbIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NbCardModule
  ]
})
export class ProfessionalModule { }
