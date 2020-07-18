import { Component, OnInit } from "@angular/core";
import { HttpClientService } from "src/app/global-services/http-client.service";
import { NbDialogService, NbDialogRef } from "@nebular/theme";

@Component({
  selector: "app-upload-cover-photo",
  templateUrl: "./upload-cover-photo.component.html",
  styleUrls: ["./upload-cover-photo.component.scss"],
})
export class UploadCoverPhotoComponent implements OnInit {
  public coverPhoto: FileList;
  private path: string = "background-pic";
  constructor(
    private httpClientService: HttpClientService,
    private dialogRef: NbDialogRef<UploadCoverPhotoComponent>
  ) {}

  ngOnInit(): void {}

  uploadCoverPhoto() {
    const formData: FormData = new FormData();
    formData.append("image", this.coverPhoto[0], "coverPhoto");
    this.httpClientService
      .uploadFiles("L5hflIJhV", this.path, formData)
      .subscribe(
        (uploadStatus) => {
          this.dialogRef.close();
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
