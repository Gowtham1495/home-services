import { SearchPipe } from './../../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { HomeServiceRoutingModule } from './home-service-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServiceComponent } from './home-service.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeServiceRoutingModule
  ],
  declarations: [
    HomeServiceComponent,
    SearchPipe]
})
export class HomeServiceModule { }
