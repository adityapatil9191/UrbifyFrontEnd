import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImageSliderComponent } from './project-image-slider.component';

describe('ProjectImageSliderComponent', () => {
  let component: ProjectImageSliderComponent;
  let fixture: ComponentFixture<ProjectImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
