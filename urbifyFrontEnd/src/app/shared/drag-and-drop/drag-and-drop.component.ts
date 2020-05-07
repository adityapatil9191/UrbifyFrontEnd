import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
  files: any = [];
  @Output() droppedFiles = new EventEmitter<FileList>();


  constructor() { }

  ngOnInit() {
  }

  uploadFile(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      this.files.push(element.name);
    }
    this.droppedFiles.emit(files);
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }

}
