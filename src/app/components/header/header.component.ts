import {Component, HostListener, OnInit} from '@angular/core';
import {WindowRef} from "../../util/WindowRef";

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
  navbarClass: string;

  constructor(private windowRef: WindowRef) { }

  ngOnInit() {
    this.navItems = [
      {link: '/home', label: 'Home', icon: 'glyphicon glyphicon-home'},
      {link: '/firmoverview', label: 'Firm Overview', icon: 'glyphicon glyphicon-link'},
      {link: '/practice-area', label: 'Practice Areas', icon: 'glyphicon glyphicon-wrench'},
      {link: '/staff', label: 'Staff', icon: 'glyphicon glyphicon-user'},
      {link: '/contact', label: 'Contact Us', icon: 'glyphicon glyphicon-earphone'}
    ];
    this.navbarClass = "";
  }

  @HostListener("window:scroll", [])
  onWindowScroll(e: any) {
    if (this.windowRef.nativeWindow.scrollY < 60) {
      this.navbarClass = "";
    } else if (this.navbarClass !== "fixed-to-top") {
      this.navbarClass = "fixed-to-top";
    }
  }
}

