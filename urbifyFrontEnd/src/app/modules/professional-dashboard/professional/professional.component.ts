import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { UploadCoverPhotoComponent } from './edit/upload-cover-photo/upload-cover-photo.component';
import { UploadProfilePicComponent } from './edit/upload-profile-pic/upload-profile-pic.component';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from 'src/app/global-services/http-client.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  public Editor = InlineEditor;
  public profile;
  constructor(
    private route: ActivatedRoute,
    private httpClientService: HttpClientService,
    private dialogService: NbDialogService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(urlParams => {
      if (urlParams.profileId) {
        this.httpClientService.getProfileInfo(urlParams.profileId).subscribe((profile: any) => {
          this.profile = profile.data;
        })
      }
    })
  }

  editCoverPhoto() {
    console.log('Edit cover photo');
    this.dialogService.open(UploadCoverPhotoComponent)
  }
  editProfilePic() {
    this.dialogService.open(UploadProfilePicComponent)
  }

}
