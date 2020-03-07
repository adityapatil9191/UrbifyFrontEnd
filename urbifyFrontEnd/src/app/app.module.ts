import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbDialogModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomePageHeaderModule } from './core/headers/home-page-header/home-page-header.module';
import { SideBarModule } from './shared/side-bar/side-bar.module';
import { ModalDialogueModule } from './shared/modal-dialogue/modal-dialogue.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarModule,
    NbIconModule,
    ModalDialogueModule,
    HomePageHeaderModule,
    BrowserAnimationsModule,
    NbSidebarModule.forRoot(),
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
