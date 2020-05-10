import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { NbSpinnerModule, NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    NbSpinnerModule,
    NbCardModule
  ],
  exports:[LoaderComponent],
  entryComponents:[LoaderComponent]
})
export class LoaderModule { }
