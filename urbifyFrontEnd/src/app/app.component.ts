import { Component } from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {RouterModule,Router} from '@angular/router'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public sidebarService:NbSidebarService,public router:Router){}
  
  title = 'urbifyFrontEnd';
  filterBarOpen:Boolean=true;
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
