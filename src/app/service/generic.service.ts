import { Observable } from 'rxjs/Observable';

export interface GenericService<T> {

  get(id: number): Observable<T>;
  save(t: T): Observable<T>;
  list(params?: any): Observable<T[]>;
  delete(id: number): Observable<T>;

}
