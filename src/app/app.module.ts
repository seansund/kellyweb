import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AgmCoreModule} from "@agm/core";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location.component';
import { StaffComponent } from './pages/staff/staff.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FirmOverviewComponent } from './pages/firm-overview/firm-overview.component';
import { PracticeMenuComponent } from './components/practice-menu/practice-menu.component';
import { PracticeAreasComponent } from './pages/practice-areas/practice-areas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LocationComponent,
    StaffComponent,
    ContactComponent,
    FirmOverviewComponent,
    PracticeMenuComponent,
    PracticeAreasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4Niun-O9mB0zhDWWGSrbYCQX19QKMvX0'
    }),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
