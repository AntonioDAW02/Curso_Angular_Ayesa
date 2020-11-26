import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  lightTheme: Boolean = true;

  ngOnInit() {}

  changeTheme() {
    if (this.lightTheme) {
      this.lightTheme = false;
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.lightTheme = true;
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
