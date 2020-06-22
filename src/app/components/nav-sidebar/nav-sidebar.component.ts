import { Component, OnInit, Input } from '@angular/core';
import {Router, NavigationStart} from '@angular/router'

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.css']
})
export class NavSidebarComponent implements OnInit {
  @Input() opened: boolean;
  routeUrl: string;
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.routeUrl = val.url;
      }
    });
  }
  getSelectedClass(routeName) {
    if (this.routeUrl) {
      return this.routeUrl.indexOf(routeName) > 0 ? 'item-focus' : '';
    }
    return '';
  }
  ngOnInit(): void {
  }

}
