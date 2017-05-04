import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { FirebaseAuthService } from '../app/auth/firebase-auth.service';
import { User } from '../app/auth/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user: boolean = false;

  constructor(private authService: FirebaseAuthService) {
    authService.getCurrentUser().subscribe(u => {
      console.log("current user...");
      this.user = u !== null;
    });

    setTimeout(() => {
      console.log("saindo...");
      this.authService.logout();
    }, 3000);
  }
}
