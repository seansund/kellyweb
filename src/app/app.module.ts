import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { BannerComponent } from './components/banner';
import { ContactInfoComponent } from './components/contact-info';
import { FooterComponent } from './components/footer';
import { HeaderComponent } from './components/header';
import { PracticeAreaComponent } from './components/practice-area';
import { ShortFormComponent } from './components/short-form';

import { HomeComponent } from './pages/home';
import { FirmOverviewComponent } from './pages/firm-overview';
import { AppRoutes } from './app.routes';


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(AppRoutes) ],
  declarations: [ AppComponent, BannerComponent, ContactInfoComponent, FooterComponent, HeaderComponent, PracticeAreaComponent, ShortFormComponent, HomeComponent, FirmOverviewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
