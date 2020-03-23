import { FileSharingService } from './../file-sharing.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
      this.fileSharing.sendFiles(this.files);
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

  constructor(private fileSharing: FileSharingService) { }

  ngOnInit() {
  }

}
