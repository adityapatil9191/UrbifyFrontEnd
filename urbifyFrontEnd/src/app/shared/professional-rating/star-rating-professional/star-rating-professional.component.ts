import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating-professional',
  templateUrl: './star-rating-professional.component.html',
  styleUrls: ['./star-rating-professional.component.scss']
})
export class StarRatingProfessionalComponent implements OnInit {

  constructor(protected router: Router,
              protected fb: FormBuilder) { }

  ratingAndComments;
  fvalue;
  @Output() emitformValue = new EventEmitter();
  ngOnInit() {
    this.ratingAndComments = this.fb.group({
      comments : ['', [ Validators.required]]
    });
    this.fvalue = this.ratingAndComments.controls;
    this.emitformValue.emit(this.ratingAndComments.controls);
  }
  giveReviewsAndComments() {
    console.log(this.fvalue);
  }


}
