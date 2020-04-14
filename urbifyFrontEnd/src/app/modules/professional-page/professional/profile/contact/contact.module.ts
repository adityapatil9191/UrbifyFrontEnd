import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { NbCardModule } from '@nebular/theme';
import { GetFreeQuoteModule } from 'src/app/shared/get-free-quote/get-free-quote.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    NbCardModule,
    GetFreeQuoteModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
