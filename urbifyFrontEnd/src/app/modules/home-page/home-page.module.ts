import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbRadioModule } from '@nebular/theme';
import { SliderModule } from 'src/app/shared/slider/slider.module';
import {NbIconModule} from '@nebular/theme';
import {NbCardModule} from '@nebular/theme';
import {NbSelectModule} from '@nebular/theme';
import {NbPopoverModule} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    SliderModule,
    NbIconModule,
    NbCardModule,
    NbSelectModule,
    NbPopoverModule,
    NbSidebarModule,
    FormsModule,
    NbRadioModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomePageModule {
  
 }
