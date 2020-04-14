import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalPageComponent } from './professional-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbActionsModule, NbIconModule } from '@nebular/theme';
import { HomePageHeaderModule } from 'src/app/core/headers/home-page-header/home-page-header.module';
import { ProfessionalsCardModule } from 'src/app/shared/professionals-card/professionals-card.module';

const routes: Routes = [
  { path: '', component: ProfessionalPageComponent,
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
];


@NgModule({
  declarations: [ProfessionalPageComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    HomePageHeaderModule,
    ProfessionalsCardModule,
    NbCardModule,
    NbActionsModule,
    NbIconModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfessionalPageModule { }
