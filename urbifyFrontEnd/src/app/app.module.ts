import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbIconModule, NbDialogModule, NbWindowModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomePageHeaderModule } from './core/headers/home-page-header/home-page-header.module';
import { SideBarModule } from './shared/side-bar/side-bar.module';
import {HttpClientModule} from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
// import { DragDropDirective } from './shared/drag-drop.directive';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarModule,
    NbIconModule,
    HomePageHeaderModule,
    BrowserAnimationsModule,
    NbDialogModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbWindowModule.forRoot(),
    NbAuthModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
