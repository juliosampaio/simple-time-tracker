import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../auth.service';
import { User } from '../../shared';

@Component({
  selector    : 'app-login',
  templateUrl : 'login.component.html',
  styleUrls   : ['login.component.scss']
})
export class LoginComponent {

  user: User;

  constructor(
    @Inject('AuthService') private authService: AuthService,
    private router: Router,
  ) {
    this.user = new User(null, null, null);
  }

  authenticate() {
    this
      .authService
      .authenticate(this.user)
      .subscribe(
        user => { this.router.navigateByUrl('/') },
        err  => { console.log(err) }
      );
  }

}
