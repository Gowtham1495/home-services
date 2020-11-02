import { ReviewsComponent } from './components/reviews/reviews.component';
import { HomeServiceModule } from './modules/home-service/home-service.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HsHeaderComponent } from './components/hs-header/hs-header.component';
import { HsMaterialModule } from './material-module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HsFooterComponent } from './components/hs-footer/hs-footer.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
      HsHeaderComponent,
      SidenavComponent,
      HsFooterComponent,
      ReviewsComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HsMaterialModule,
    HomeServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
