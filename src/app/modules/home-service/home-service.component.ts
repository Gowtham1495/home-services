import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { IHomeServiceList } from '../../interfaces/IHomeServiceList';
import { Component, OnInit } from '@angular/core';
import { IHomeService } from '../../interfaces/IHomeService';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css']
})
export class HomeServiceComponent implements OnInit {

  searchValue: string;
  homeServices: IHomeServiceList;
  servicesList: Array<IHomeService>;
  headers: Map<string, string>;

  constructor(private homeService: HomeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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

  routeToServiceProvider(sid: number): void {
    console.log('routing', sid);
    this.router.navigate(['/serviceProviders'], { queryParams: { serviceId: sid } });
  }

}
