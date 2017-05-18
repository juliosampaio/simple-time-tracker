import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from './auth.service';
import { User } from '../shared';

@Injectable()
export class FirebaseAuthService implements AuthService {

  user: Observable<firebase.User>;

  constructor(private fbAuthService: AngularFireAuth) {
    this.user = this.fbAuthService.authState;
  }

  getCurrentUser(): Observable<User> {
    return <any> this.user;
  }

  authenticate(usr: User): Observable<User> {
      var p = this
                .fbAuthService
                .auth
                .signInWithEmailAndPassword(usr.login, usr.password);

      return Observable.fromPromise(<any>p);
  }

  logout(): Observable<User> {
    this.fbAuthService.auth.signOut();
    return Observable.of(null);
  }


}
