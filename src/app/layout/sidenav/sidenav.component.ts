import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

interface NavigationItem {
  icon  : string;
  title : string;
  path  : string;
}

@Component({
  selector    : 'app-sidenav',
  templateUrl : 'sidenav.component.html',
  styleUrls   : ['sidenav.component.scss']
})
export class SidenavComponent {

  @ViewChild('rightSidenav')
  rightSidenav    : MdSidenav;
  navigationItems : NavigationItem[];

  constructor() {
    this.navigationItems = [
      {icon: 'assignment_turned_in', title: 'Tasks', path: 'face'},
      {icon: 'assignment', title: 'Projects', path: 'face'},
      {icon: 'show_chart', title: 'Reports', path: 'face'},
      {icon: 'label', title: 'Tags', path: 'face'}
    ]
  }

  toggle() {
    this.rightSidenav.toggle()
  }

}
