import { GetFreeQuoteComponent } from './../../shared/get-free-quote/get-free-quote/get-free-quote.component';
import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbWindowService } from '@nebular/theme';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = 'urbifyFrontEnd';
  filterBarOpen = true;
  constructor(public sidebarService: NbSidebarService, public router: Router, public windowService: NbWindowService) { }
  collapse() {
    if (this.filterBarOpen === false) {
      this.sidebarService.expand('sideFilterBar');
      this.filterBarOpen = true;
    } else {
      this.filterBarOpen = false;
      this.sidebarService.collapse('sideFilterBar');
    }
    return false;
  }
  diplayRating(e) {
    console.log(e);
  }
  ngOnInit() {
    // this.windowService.open(GetFreeQuoteComponent, {title: `Get Free Quote`});
  }
}
