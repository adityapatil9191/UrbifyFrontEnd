import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSliderComponent } from './project-slider.component';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ProjectCardModule } from 'src/app/shared/project-card/project-card.module';
import { ProfessionalsCardModule } from 'src/app/shared/professionals-card/professionals-card.module';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [ProjectSliderComponent],
  imports: [
    CommonModule,
    SwiperModule,
    ProjectCardModule,
    ProfessionalsCardModule
  ],
  exports: [
    ProjectSliderComponent,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class ProjectSliderModule { }
