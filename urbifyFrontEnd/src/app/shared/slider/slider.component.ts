import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
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
      spaceBetween: 20,
      autoplay: true,
      loop: true,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: false
    };
  }

}
