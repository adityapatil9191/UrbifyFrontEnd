import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ProfessionalLoginComponent } from 'src/app/shared/modal-dialogue/professional-login/professional-login.component';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.scss']
})
export class HomePageHeaderComponent implements OnInit {
  constructor(private dialogService: NbDialogService) {}
    
  loginProfessional(){
    this.dialogService.open(ProfessionalLoginComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  }
  
  ngOnInit() {}

}
