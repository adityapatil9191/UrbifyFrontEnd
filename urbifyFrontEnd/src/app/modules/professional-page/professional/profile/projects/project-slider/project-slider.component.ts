import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrls: ['./project-slider.component.scss']
})
export class ProjectSliderComponent implements OnInit {
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
      slidesPerView: 'auto',
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
