import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCoverPhotoComponent } from './upload-cover-photo.component';

describe('UploadCoverPhotoComponent', () => {
  let component: UploadCoverPhotoComponent;
  let fixture: ComponentFixture<UploadCoverPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCoverPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCoverPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
