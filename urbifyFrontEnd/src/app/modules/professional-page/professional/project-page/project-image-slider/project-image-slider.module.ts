import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectImageSliderComponent } from './project-image-slider.component';


import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [ProjectImageSliderComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    ProjectImageSliderComponent
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class ProjectImageSliderModule { }
