import { ActivatedRoute, Router } from '@angular/router';
import { IServiceProvidersList } from './../../interfaces/IServiceProvidersList';
import { IServiceProvider } from './../../interfaces/IServiceProviders';
import { ServiceProviderService } from './../../services/service-provider.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  spResponse: IServiceProvidersList;
  serviceProviders: Array<IServiceProvider>;
  headers: Map<string, string>;
  serviceIdFilter: number;


  constructor(
    private serviceProvidersService: ServiceProviderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route
      .queryParams
      .subscribe(params => {
        this.serviceIdFilter = +params.serviceId || 0;
        this.serviceProvidersService.getServiceProviders().subscribe(resp => {
          const keys = resp.headers.keys();
          this.headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
          console.log('headers', this.headers);
          console.log('resp', resp);
          console.log('this.serviceIdFilter', this.serviceIdFilter);
          this.spResponse = { ...resp.body.data };
          if (this.spResponse !== null) {
            this.serviceProviders = this.spResponse.serviceProviders;
          }
          console.log('this.serviceProviders', this.serviceProviders);
        });
      });



  }

}
