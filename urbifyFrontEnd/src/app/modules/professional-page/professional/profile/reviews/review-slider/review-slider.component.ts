import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-review-slider',
  templateUrl: './review-slider.component.html',
  styleUrls: ['./review-slider.component.scss']
})
export class ReviewSliderComponent implements OnInit {
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
