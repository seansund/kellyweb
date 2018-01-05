import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeMenuComponent } from './practice-menu.component';

import {APP_BASE_HREF} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
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

describe('PracticeMenuComponent', () => {
  let component: PracticeMenuComponent;
  let fixture: ComponentFixture<PracticeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeMenuComponent ],
      imports: [
        AppRoutingModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
