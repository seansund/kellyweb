import { Component, OnInit } from '@angular/core';

class NavItem {
  link: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[];

  constructor() { }

  ngOnInit() {
    this.navItems = [
      {link: '/home', label: 'Home'},
      {link: '/firmoverview', label: 'Firm Overview'},
      {link: '/practice-area', label: 'Practice Areas'},
      {link: '/staff', label: 'Staff'},
      {link: '/contact', label: 'Contact Us'}
    ];
  }

}

