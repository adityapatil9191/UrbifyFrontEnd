import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-upload-project-images',
  templateUrl: './upload-project-images.component.html',
  styleUrls: ['./upload-project-images.component.scss']
})
export class UploadProjectImagesComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  public open(dialog: TemplateRef<any>): void {
    this.dialogService.open(dialog);
  }

}
