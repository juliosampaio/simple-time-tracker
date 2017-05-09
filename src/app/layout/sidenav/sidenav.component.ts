import { Component, ViewChild, Inject } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { AuthService } from '../../auth/auth.service';

interface NavigationItem {
  icon   : string;
  title  : string;
  path  ?: string;
  action?: Function;
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

  constructor(@Inject('AuthService') private authService: AuthService) {
    this.navigationItems = [
      {icon: 'assignment_turned_in', title: 'Tasks', path: ''},
      {icon: 'assignment', title: 'Projects', path: ''},
      {icon: 'show_chart', title: 'Reports', path: ''},
      {icon: 'label', title: 'Tags', path: 'tags'},
      {icon: 'ic_exit_to_app', title: 'Log out', action: () => {authService.logout()}}
    ]
  }

  toggle() {
    this.rightSidenav.toggle()
  }

}
