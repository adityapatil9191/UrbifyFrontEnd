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
  constructor(public sidebarService: NbSidebarService, public router: Router, public windowService: NbWindowService) { }
  collapse() {
   this.sidebarService.toggle();
  }
  ngOnInit() {
  }
}
