import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { RegisterProfessionalComponent } from './register-professional/register-professional.component';
import { RegisterProfessionalPagetwoComponent } from './register-professional-pagetwo/register-professional-pagetwo.component';

export const routes:Routes=[
{
  path:'',
  component:NbAuthComponent,
  children:[
    {
      path:'login',
      component:LoginComponent,
    },
    {
      path:'register',
      component:RegisterProfessionalComponent,
    },
    {
      path:'registertwo',
      component:RegisterProfessionalPagetwoComponent
    }
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthRoutingModule { }
