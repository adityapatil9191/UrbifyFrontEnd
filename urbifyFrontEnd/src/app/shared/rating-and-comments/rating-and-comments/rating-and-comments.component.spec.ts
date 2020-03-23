import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAndCommentsComponent } from './rating-and-comments.component';

describe('RatingAndCommentsComponent', () => {
  let component: RatingAndCommentsComponent;
  let fixture: ComponentFixture<RatingAndCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingAndCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingAndCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
