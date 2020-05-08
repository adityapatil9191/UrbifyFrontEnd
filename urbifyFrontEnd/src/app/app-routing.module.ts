import { ProfessionalRouteGuard } from './global-services/professional-route.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('../app/auth/auth/auth.module').then(m => m.AuthModule)},
  { path: '', pathMatch: 'full', loadChildren: () => import('./modules/home-page/home-page.module').then( m => m.HomePageModule) },
  {
    path: 'professional-page',
    loadChildren: () => import('./modules/professional-page/professional-page.module').then(m => m.ProfessionalPageModule)
  },
  {
    path: 'professional-dashboard',
    loadChildren: () => import('./modules/professional-dashboard/professional-dashboard.module').then(m => m.ProfessionalDashboardModule),
    canActivate:[ProfessionalRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
