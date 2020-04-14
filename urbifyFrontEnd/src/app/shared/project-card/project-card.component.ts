import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  public onViewProject(): void {
    console.log('okk');
    this.router.navigateByUrl('/');
  }

}
