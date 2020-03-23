import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-and-comments',
  templateUrl: './rating-and-comments.component.html',
  styleUrls: ['./rating-and-comments.component.scss']
})
export class RatingAndCommentsComponent implements OnInit {

  constructor() { }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  ngOnInit() {
  }

}
