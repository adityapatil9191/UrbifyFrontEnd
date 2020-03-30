import { NbInputModule, NbButtonModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingProfessionalComponent } from './star-rating-professional/star-rating-professional.component';
import { NgxStarsModule } from 'ngx-stars';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StarRatingProfessionalComponent],
  imports: [
    CommonModule,
    NgxStarsModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule
  ],
  exports: [StarRatingProfessionalComponent]
})
export class ProfessionalRatingModule { }
