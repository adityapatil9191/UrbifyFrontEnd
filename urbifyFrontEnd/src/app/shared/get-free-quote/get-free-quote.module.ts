import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetFreeQuoteComponent } from './get-free-quote/get-free-quote.component';
import { NbButtonModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { DetailsSentComponent } from './details-sent/details-sent.component';



@NgModule({
  declarations: [GetFreeQuoteComponent, DetailsSentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule
  ],
  entryComponents: [GetFreeQuoteComponent]
})
export class GetFreeQuoteModule { }
