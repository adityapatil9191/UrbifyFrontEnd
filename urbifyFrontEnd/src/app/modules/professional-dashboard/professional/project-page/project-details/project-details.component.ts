import { Component, OnInit } from '@angular/core';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  public Editor = InlineEditor;
  constructor() { }

  ngOnInit() {
  }

}
