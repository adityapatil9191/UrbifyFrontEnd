import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProjectImagesComponent } from './upload-project-images.component';

describe('UploadProjectImagesComponent', () => {
  let component: UploadProjectImagesComponent;
  let fixture: ComponentFixture<UploadProjectImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProjectImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProjectImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
