import { Component, OnInit } from '@angular/core';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public Editor = InlineEditor;
  constructor() { }

  ngOnInit() {
  }

}
