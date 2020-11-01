import { ServiceProviderRoutingModule } from './service-provider-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProviderComponent } from './service-provider.component';

@NgModule({
  imports: [
    CommonModule,
    ServiceProviderRoutingModule
  ],
  declarations: [ServiceProviderComponent]
})
export class ServiceProviderModule { }
