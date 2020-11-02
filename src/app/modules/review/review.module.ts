import { ReviewRoutingModule } from './review-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review.component';

@NgModule({
  imports: [
    ReviewRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ReviewComponent]
})
export class ReviewModule { }
