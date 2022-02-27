import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav')
  sidenav: MatSidenav;

  title = 'angular-portfolio';

  constructor() {}

  ngAfterViewInit() {
    // this.sidenav.open();
  }
}
