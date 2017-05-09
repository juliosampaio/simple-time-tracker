import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
      private router: Router,
      @Inject('AuthService') private authService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this
          .authService
          .getCurrentUser()
          .map( u => {
            debugger;
            if (u === null) {
              this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
              return Observable.of(false);
            } else {
              return Observable.of(true);
            }
          })
          .catch(() => {
            debugger;
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return Observable.of(false);
          });
    }
}
