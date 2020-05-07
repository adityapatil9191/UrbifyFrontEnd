import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewSliderComponent } from './review-slider.component';
import { SWIPER_CONFIG, SwiperConfigInterface, SwiperModule } from 'ngx-swiper-wrapper';
import { ProjectCardModule } from 'src/app/shared/project-card/project-card.module';
import { ReviewCardModule } from './review-card/review-card.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [ReviewSliderComponent],
  imports: [
    SwiperModule,
    ReviewCardModule,
    CommonModule
  ],
  exports: [
    ReviewSliderComponent
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class ReviewSliderModule { }
