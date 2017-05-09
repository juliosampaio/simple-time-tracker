import { Component, Inject, ChangeDetectorRef, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../app/auth/auth.service';
import { User } from '../app/auth/user.model';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: boolean = false;

  constructor(
    @Inject('AuthService') private authService: AuthService,
    private cdRef:ChangeDetectorRef
  ) {
    authService.getCurrentUser().subscribe(u => {
      console.log('detecting user...');
      this.user = u !== null;
      this.cdRef.detectChanges();
    });
  }

  ngOnInit() {
    console.log('init...');
    this.cdRef.detectChanges();
  }
}
