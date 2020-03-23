import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProfessionalPagetwoComponent } from './register-professional-pagetwo.component';

describe('RegisterProfessionalPagetwoComponent', () => {
  let component: RegisterProfessionalPagetwoComponent;
  let fixture: ComponentFixture<RegisterProfessionalPagetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProfessionalPagetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProfessionalPagetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
