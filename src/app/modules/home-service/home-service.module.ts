import { HomeServiceRoutingModule } from './home-service-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServiceComponent } from './home-service.component';

@NgModule({
  imports: [
    CommonModule,
    HomeServiceRoutingModule
  ],
  declarations: [
    HomeServiceComponent]
})
export class HomeServiceModule { }
