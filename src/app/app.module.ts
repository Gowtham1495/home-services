import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HsHeaderComponent } from './hs-header/hs-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HsMaterialModule } from './material-module';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HsFooterComponent } from './hs-footer/hs-footer.component';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    HsMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
