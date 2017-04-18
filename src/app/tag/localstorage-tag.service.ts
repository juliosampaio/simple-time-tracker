import { LocalStorageService } from '../service/local-storage.service';
import { Tag } from './tag.model';

export class LocalStorageTagService extends LocalStorageService <Tag> {
  constructor() {
    super('tags');
  }
}
