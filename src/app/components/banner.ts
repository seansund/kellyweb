import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'banner-wrap',
  moduleId: module.id,
  templateUrl: 'banner.html',
  styleUrls: ['site.css', 'animate.css']
})
export class BannerComponent {
  mainPage: boolean;

  constructor(private router: Router) {
    //const url: Observable<string> = route.url; //.map(segments => segments.join(''));
  }

  ngOnInit() {
    this.mainPage = true;
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.mainPage = (val.url === '/');
        console.log('Router event: ' + this.mainPage, val);
      }
    });
  }
}
