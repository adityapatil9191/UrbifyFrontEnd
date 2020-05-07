import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UploadCoverPhotoComponent } from './edit/upload-cover-photo/upload-cover-photo.component';
import { UploadProfilePicComponent } from './edit/upload-profile-pic/upload-profile-pic.component';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  public Editor = InlineEditor;
  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  editCoverPhoto() {
    console.log('Edit cover photo');
    this.dialogService.open(UploadCoverPhotoComponent)
  }
  editProfilePic() {
    this.dialogService.open(UploadProfilePicComponent)
  }

}
