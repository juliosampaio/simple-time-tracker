import { Component, Inject } from '@angular/core';

import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector    : 'app-login',
  templateUrl : 'login.component.html',
  styleUrls   : ['login.component.scss']
})
export class LoginComponent {

  user: User;

  constructor(@Inject('AuthService') private authService: AuthService) {
    this.user = new User(null, null, null);
  }

  authenticate() {
    this
      .authService
      .authenticate(this.user)
      .subscribe((user) => {
        console.log(user);
      });
  }

}
