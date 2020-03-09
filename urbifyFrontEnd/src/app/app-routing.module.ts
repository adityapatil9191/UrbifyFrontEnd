import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';


const routes: Routes = [
  {path: 'auth',loadChildren:'../app/auth/auth/auth.module#AuthModule'},
  { path: '', pathMatch: 'full', loadChildren: () => import('./modules/home-page/home-page.module').then( m => m.HomePageModule) }
];

@NgModule({
  imports: [
    
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
