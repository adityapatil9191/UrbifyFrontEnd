import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';
import { AboutMeComponent } from './about-me.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    NbCardModule,
    CKEditorModule
  ],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }
