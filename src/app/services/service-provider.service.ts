import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  serviceProvidersUrl = 'assets/mocks/service-providers.json';
  constructor(private http: HttpClient) { }

  getServiceProviders(): any {
    console.log('calling api');
    return this.http.get(this.serviceProvidersUrl, { observe: 'response' });
  }
}
