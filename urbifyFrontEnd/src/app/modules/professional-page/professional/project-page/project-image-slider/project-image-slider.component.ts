import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-project-image-slider',
  templateUrl: './project-image-slider.component.html',
  styleUrls: ['./project-image-slider.component.scss']
})
export class ProjectImageSliderComponent implements OnInit {
  public config: SwiperConfigInterface;
  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.setSlideConfig();
  }

  private setSlideConfig(): void {
    this.cd.detectChanges();
    this.config = {
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: false,
      loop: false,
      keyboard: {
        enabled: true,
      },
      pagination: false,
      navigation: true
    };
  }
}
