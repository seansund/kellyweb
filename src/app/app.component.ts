import {Component, HostListener} from '@angular/core';
import {WindowRef} from "./util/WindowRef";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Kelly Sundberg, P.C.';
  navMargin = '';

  constructor(private windowRef: WindowRef) { }

  @HostListener("window:scroll", [])
  onWindowScroll(e: any) {
    if (this.windowRef.nativeWindow.scrollY < 60) {
      this.navMargin = "";
    } else if (this.navMargin !== "fixed-to-top-margin") {
      this.navMargin = "fixed-to-top-margin";
    }
  }
}
