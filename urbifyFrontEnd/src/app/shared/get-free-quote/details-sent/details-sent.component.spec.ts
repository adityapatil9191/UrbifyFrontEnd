import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSentComponent } from './details-sent.component';

describe('DetailsSentComponent', () => {
  let component: DetailsSentComponent;
  let fixture: ComponentFixture<DetailsSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
