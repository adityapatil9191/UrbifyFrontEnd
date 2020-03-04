import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NbLayoutModule } from '@nebular/theme';
import { SliderModule } from 'src/app/shared/slider/slider.module';

const routes: Routes = [
  { path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    SliderModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomePageModule { }