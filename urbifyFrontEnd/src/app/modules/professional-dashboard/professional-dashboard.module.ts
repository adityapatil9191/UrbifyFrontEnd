import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalDashboardComponent } from './professional-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';
import { HomePageHeaderModule } from 'src/app/core/headers/home-page-header/home-page-header.module';

const routes: Routes = [
  {
    path: '', component: ProfessionalDashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./professional/professional.module').then(m => m.ProfessionalModule)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
]

@NgModule({
  declarations: [ProfessionalDashboardComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    HomePageHeaderModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfessionalDashboardModule { }
