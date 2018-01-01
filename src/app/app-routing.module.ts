import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './pages/home/home.component';
import { FirmOverviewComponent } from "./pages/firm-overview/firm-overview.component";
import { StaffComponent } from "./pages/staff/staff.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PracticeAreasComponent } from "./pages/practice-areas/practice-areas.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'firmoverview', component: FirmOverviewComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'practice-area', redirectTo: '/practice-area/divorce', pathMatch: 'full'},
  {path: 'practice-area/:id', component: PracticeAreasComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
