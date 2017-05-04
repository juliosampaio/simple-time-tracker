import { Component, Inject } from '@angular/core';

import { AuthService } from '../auth.service';
import { FirebaseAuthService } from '../firebase-auth.service';
import { User } from '../user.model';

@Component({
  selector    : 'app-login',
  templateUrl : 'login.component.html',
  styleUrls   : ['login.component.scss'],
  providers   : [{provide: 'AuthService', useClass: FirebaseAuthService}]
})
export class LoginComponent {

  user: User;

  constructor(@Inject('AuthService') private authService: AuthService) {
    this.user = new User(null, null, null);
    authService.getCurrentUser().subscribe((u) => {
      console.log(u);
    });
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
