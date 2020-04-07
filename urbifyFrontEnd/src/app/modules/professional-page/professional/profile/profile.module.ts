import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeModule } from './about-me/about-me.module';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsModule } from './projects/projects.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ContactModule } from './contact/contact.module';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    AboutMeModule,
    ProjectsModule,
    ReviewsModule,
    CommonModule,
    ContactModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileModule { }
