import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from './review-card.component';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [ReviewCardComponent],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [
    ReviewCardComponent
  ]
})
export class ReviewCardModule { }
