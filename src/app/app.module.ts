import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HsHeaderComponent } from './components/hs-header/hs-header.component';
import { HsMaterialModule } from './material-module';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HsFooterComponent } from './components/hs-footer/hs-footer.component';


@NgModule({
  declarations: [
    AppComponent,
      HsHeaderComponent,
      HomeComponent,
      SidenavComponent,
      HsFooterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HsMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
