import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { NbCardModule } from '@nebular/theme';
import { ReviewSliderModule } from './review-slider/review-slider.module';



@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    NbCardModule,
    ReviewSliderModule,
    CommonModule
  ],
  exports: [
    ReviewsComponent
  ]
})
export class ReviewsModule { }
