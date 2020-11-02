import { IServiceProvidersList } from './../../interfaces/IServiceProvidersList';
import { ServiceProviderService } from './../../services/service-provider.service';
import { IServiceProvider } from './../../interfaces/IServiceProvider';
import { IReview } from './../../interfaces/IReview';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  spResponse: IServiceProvidersList;
  serviceProviders: Array<IServiceProvider>;

  model = new IReview(null, null, '', '');

  submittedMessage = '';

  onSubmit(): void {
    
  }

  constructor(private serviceProvidersService: ServiceProviderService) { }

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
  }
}
