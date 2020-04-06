import { GetFreeQuoteModule } from './../../shared/get-free-quote/get-free-quote.module';
import { HomePageHeaderModule } from './../../core/headers/home-page-header/home-page-header.module';
import { SideBarModule } from './../../shared/side-bar/side-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbRadioModule, NbActionsModule, NbWindowModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { SliderModule } from 'src/app/shared/slider/slider.module';
import {NbIconModule} from '@nebular/theme';
import {NbCardModule} from '@nebular/theme';
import {NbSelectModule} from '@nebular/theme';
import {NbPopoverModule} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HomePageHeaderComponent } from 'src/app/core/headers/home-page-header/home-page-header.component';
import { ProfessionalsComponent } from './professionals/professionals.component';

const routes: Routes = [
  { path: '', component: HomePageComponent}
];

@NgModule({
  declarations: [HomePageComponent, HowItWorksComponent, ProfessionalsComponent ],
  imports: [
    NbActionsModule,
    SideBarModule,
    HomePageHeaderModule,
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
    NbInputModule,
    NbButtonModule,
    NbWindowModule.forChild(),
    GetFreeQuoteModule,
    NbSidebarModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomePageModule {

 }
