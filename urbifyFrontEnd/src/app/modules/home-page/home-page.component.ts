import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = 'urbifyFrontEnd';
  filterBarOpen = true;
  constructor(public sidebarService: NbSidebarService, public router: Router) { }
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
  ngOnInit() {}
}
