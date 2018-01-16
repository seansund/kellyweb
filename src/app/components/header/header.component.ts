import { Component, OnInit } from '@angular/core';

class NavItem {
  link: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[];
  mobileNavItems: NavItem[];

  constructor() { }

  ngOnInit() {
    this.navItems = [
      {link: '/home', label: 'Home', icon: 'glyphicon glyphicon-home'},
      {link: '/firmoverview', label: 'Firm Overview', icon: 'glyphicon glyphicon-link'},
      {link: '/practice-area', label: 'Practice Areas', icon: 'glyphicon glyphicon-wrench'},
      {link: '/staff', label: 'Staff', icon: 'glyphicon glyphicon-user'},
      {link: '/contact', label: 'Contact Us', icon: 'glyphicon glyphicon-earphone'}
    ];
    this.mobileNavItems = this.navItems.slice(1);
  }

}

