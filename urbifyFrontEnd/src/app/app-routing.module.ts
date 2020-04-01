import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: 'auth', loadChildren: '../app/auth/auth/auth.module#AuthModule'},
  { path: '', pathMatch: 'full', loadChildren: () => import('./modules/home-page/home-page.module').then( m => m.HomePageModule) },
  {
    path: 'professional-page',
    loadChildren: () => import('./modules/professional-page/professional-page.module').then(m => m.ProfessionalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
