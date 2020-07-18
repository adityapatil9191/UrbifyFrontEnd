import { Component, OnInit, Input } from "@angular/core";
import { HttpClientService } from "src/app/global-services/http-client.service";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "app-upload-profile-pic",
  templateUrl: "./upload-profile-pic.component.html",
  styleUrls: ["./upload-profile-pic.component.scss"],
})
export class UploadProfilePicComponent implements OnInit {
  @Input() profileId: string;
  public profilePic: FileList;
  constructor(
    public httpClientService: HttpClientService,
    private dialogRef: NbDialogRef<UploadProfilePicComponent>
  ) {}

  ngOnInit(): void {}

  onUploadProfilePic() {
    const formData: FormData = new FormData();
    formData.append("image", this.profilePic[0], "profilePic");
    this.httpClientService
      .uploadFiles(this.profileId, "profile-pic", formData)
      .subscribe((uploadStatus) => {
        console.log(uploadStatus);
        this.dialogRef.close();
      });
  }
}
