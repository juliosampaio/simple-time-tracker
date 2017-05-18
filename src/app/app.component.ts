import { Component, Inject, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../app/auth/auth.service';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: boolean = false;

  constructor( @Inject('AuthService') private authService: AuthService ) {
    authService.getCurrentUser().subscribe(u => {
      console.log('detecting user...');
      this.user = u !== null;
    });
  }

  ngOnInit() {
    console.log('init...');
  }
}
