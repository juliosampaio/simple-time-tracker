import { Component, Inject } from '@angular/core';
import { TagService } from './tags.service';
import { LocalStorageTagService } from './localstorage-tag.service';
import { Tag } from './tag.model';

@Component({
  selector    : 'app-tags',
  templateUrl : 'tags.component.html',
  styleUrls   : ['tags.component.scss'],
  providers   : [{provide: 'TagService', useClass: LocalStorageTagService}]
})
export class TagsComponent {

  tags: Tag[] = [];
  newTagName: string;

  constructor(@Inject('TagService') private service: TagService) {
    this.refreshTagList();
  }

  refreshTagList() {
    this.service
      .list()
      .subscribe((tags) => this.tags = tags);
  }

  add(newTag: Tag) {
    this.service.save({
      id  : new Date().getTime(),
      name: newTag.name
    }).subscribe(() => {
      this.refreshTagList();
    });
  }

  delete(tag: Tag) {
    this.service.delete(tag.id).subscribe(() => this.refreshTagList());
  }

}
