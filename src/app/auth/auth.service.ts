import { Observable } from 'rxjs/Observable';

import { User } from './user.model';

export interface AuthService {
  getCurrentUser(): Observable<User>;
  authenticate(user: User): Observable<User>;
  logout(): Observable<User>;
}
