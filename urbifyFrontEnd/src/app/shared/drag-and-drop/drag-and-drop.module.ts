import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from './drag-and-drop.component';
import { DragAndDropDirective } from './drag-and-drop.directive';
import { NbIconModule } from '@nebular/theme';



@NgModule({
  declarations: [DragAndDropComponent, DragAndDropDirective],
  imports: [
    CommonModule,
    NbIconModule
  ],
  exports: [DragAndDropComponent]
})
export class DragAndDropModule { }
