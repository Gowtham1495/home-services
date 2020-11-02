import { HttpClient } from '@angular/common/http';
import { IReview } from './../interfaces/IReview';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  submitReviewUrl = '';
constructor(private http: HttpClient) { }

submitreview(review: IReview): any {
  console.log('review', review);
  console.log('calling api');
  //  return this.http.get(this.submitReviewUrl, { observe: 'response' });
  return 10;
}

}
