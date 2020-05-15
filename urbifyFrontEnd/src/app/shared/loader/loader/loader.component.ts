import { LoaderService } from './../../../global-services/loader.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderService:LoaderService) { }
  isLoading:Subject<boolean> =  this.loaderService.isLoading;
  ngOnInit(): void {
  }


}
