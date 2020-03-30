import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingProfessionalComponent } from './star-rating-professional.component';

describe('StarRatingProfessionalComponent', () => {
  let component: StarRatingProfessionalComponent;
  let fixture: ComponentFixture<StarRatingProfessionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRatingProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
