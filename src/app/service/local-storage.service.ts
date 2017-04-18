import { Observable } from 'rxjs/Observable';
import { GenericService } from '../service/generic.service';

export abstract class LocalStorageService<T> implements GenericService<T> {

  constructor(protected key: string) {

  }

  get(id: number) : Observable<T> {
    return this.getItem(id);
  }

  list(id: number) : Observable<T> {
    return null;
  }

  save(record: T) : Observable<T> {
    return this.setItem(record);
  }

  delete(id: number) : Observable<T> {
    return null;
  }

  protected setItem(item: T) : Observable<T> {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify([]));
    }
    let items      = <T[]> JSON.parse(localStorage.getItem(this.key));
    let otherItems = items.filter((i) => (<any>i).id !== (<any> item).id);
    otherItems.push(item);
    localStorage.setItem(this.key, JSON.stringify(otherItems));
    return Observable.of(item);
  }

  protected getItem(id: number) : Observable<T> {
    let stringItem = localStorage.getItem(this.key);
    let items      = <T[]> JSON.parse(stringItem);
    let item       = items.find((i:any) => i.id === id);
    return Observable.of(item);
  }

}
