import { Component } from '@angular/core';
import {NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public sidebarService:NbSidebarService){}

  title = 'urbifyFrontEnd';

  collapse() {
    this.sidebarService.collapse('sideFilterBar');
    return false;
  }
}
