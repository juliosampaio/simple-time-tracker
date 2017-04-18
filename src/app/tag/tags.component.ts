import { Component, Inject } from '@angular/core';
import { TagService } from './tags.service';
import { LocalStorageTagService } from './localstorage-tag.service';
import { Tag } from './tag.model';

@Component({
  selector    : 'app-tags',
  templateUrl : 'tags.component.html',
  providers   : [{provide: 'TagService', useClass: LocalStorageTagService}]
})
export class TagsComponent {

  tags: Tag[] = [];

  constructor(@Inject('TagService') private service: TagService) {
    service.save({
      id: 1,
      name: 'app'
    }).subscribe();
    service
      .get(1)
      .subscribe((t) => this.tags.push(t));
  }

}
