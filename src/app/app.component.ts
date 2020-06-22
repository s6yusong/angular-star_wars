import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starWars';
  sideBarOpened: boolean = false;
  toggleNav(opened) {
    this.sideBarOpened = opened;
  }
}
