import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

homeServicesUrl = 'assets/services.json';
constructor(private http: HttpClient) { }

getHomeServices(): any {
  console.log('calling api');
  return this.http.get(this.homeServicesUrl, { observe: 'response' });
}

}
