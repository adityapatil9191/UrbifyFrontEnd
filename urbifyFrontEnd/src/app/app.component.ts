import { Component, OnInit } from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {RouterModule,Router} from '@angular/router'; 
import { of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urbifyFrontEnd';
  filterBarOpen:Boolean=true;
  constructor(public sidebarService:NbSidebarService,public router:Router){}
  

  collapse() {
    if(this.filterBarOpen === false){
      this.sidebarService.expand('sideFilterBar');
      this.filterBarOpen = true;
    }else{
      this.filterBarOpen = false;
      this.sidebarService.collapse('sideFilterBar');
    }
    
    return false;
  }
}
