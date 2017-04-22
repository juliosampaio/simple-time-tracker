import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import { GenericService } from '../service/generic.service';

interface GenericRecord {
  id: number;
}

export abstract class LocalStorageService<T extends GenericRecord> implements GenericService<T> {

  constructor(protected key: string) {

  }

  get(id: number) : Observable<T> {
    return this.getItem(id);
  }

  list(params?: any) : Observable<T[]> {
    let stringItem = localStorage.getItem(this.key);
    let items      = <T[]> JSON.parse(stringItem);
    return Observable.of(items);
  }

  save(record: T) : Observable<T> {
    return this.setItem(record);
  }

  delete(id: number) : Observable<T> {

    let collection = localStorage.getItem(this.key);
    let response   = null;

    if (collection) {
      let items      = <T[]> JSON.parse(collection);
      let otherItems = items.filter((i) => i.id !== id);
      localStorage.setItem(this.key, JSON.stringify(otherItems));
    }

    return Observable.of(response);
  }

  protected setItem(item: T) : Observable<T> {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify([]));
    }
    let items      = <T[]> JSON.parse(localStorage.getItem(this.key));
    let otherItems = items.filter((i) => i.id !== item.id);
    otherItems.push(item);
    localStorage.setItem(this.key, JSON.stringify(otherItems));
    return Observable.of(item);
  }

  protected getItem(id: number) : Observable<T> {
    let stringItem = localStorage.getItem(this.key);
    let items      = <T[]> JSON.parse(stringItem);
    let item       = items.find((i) => i.id === id);
    return Observable.of(item);
  }

}
