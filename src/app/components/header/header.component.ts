import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = '@Yue Song';
  sideBarOpened: boolean = false;
  @Output() onToggleNav: EventEmitter<any> = new EventEmitter<boolean>();
  toggleSidebar() {
    this.sideBarOpened = !this.sideBarOpened;
    this.onToggleNav.emit(this.sideBarOpened);
  }
  constructor() { }

  ngOnInit(): void {

  }

}
