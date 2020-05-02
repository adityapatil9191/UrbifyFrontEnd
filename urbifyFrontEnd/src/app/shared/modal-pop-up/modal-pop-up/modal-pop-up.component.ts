import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-modal-pop-up',
  templateUrl: './modal-pop-up.component.html',
  styleUrls: ['./modal-pop-up.component.scss']
})
export class ModalPopUpComponent implements OnInit {
  @Input() title:string;
  constructor(

    protected dialogRef: NbDialogRef<any>
  ) { }

    close() {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
