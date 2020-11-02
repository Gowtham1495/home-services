import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './review.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    ReviewComponent
  ]
})
export class ReviewRoutingModule { }
