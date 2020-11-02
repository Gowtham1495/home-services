import { HomeService } from './../../services/home.service';
import { IHomeServiceList } from './../../interfaces/IHomeServiceList';
import { IHomeService } from './../../interfaces/IHomeService';
import { IReview } from './../../interfaces/IReview';
import { ServiceProviderService } from './../../services/service-provider.service';
import { IServiceProvidersList } from './../../interfaces/IServiceProvidersList';
import { Component, OnInit } from '@angular/core';
import { IServiceProvider } from 'src/app/interfaces/IServiceProvider';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  spResponse: IServiceProvidersList;
  serviceProviders: Array<IServiceProvider>;
  homeServices: IHomeServiceList;
  servicesList: Array<IHomeService>;
  headers: Map<string, string>;

  model = new IReview(null, null, '', '');

  submittedMessage = '';

  onSubmit(): void {
    
  }

  constructor(private homeService: HomeService, private serviceProvidersService: ServiceProviderService) { }

  ngOnInit(): void {
    this.serviceProvidersService.getServiceProviders().subscribe(resp => {
      const keys = resp.headers.keys();
      console.log('resp', resp);
      this.spResponse = { ...resp.body.data };
      if (this.spResponse !== null) {
        this.serviceProviders = this.spResponse.serviceProviders;
      }
      console.log('this.serviceProviders', this.serviceProviders);
    });
    this.homeService.getHomeServices().subscribe(resp => {
      // display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
      console.log('headers', this.headers);
      console.log('resp', resp);
      // access the body directly, which is typed as `productsList`.
      this.homeServices = { ...resp.body.data };
      if (this.homeServices !== null) {
        this.servicesList = this.homeServices.serviceList;
      }
      console.log('this.servicesList', this.servicesList);
    });
  }
}
