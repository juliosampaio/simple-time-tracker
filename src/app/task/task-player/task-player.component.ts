import { Component, Input } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Task } from '../../shared';

@Component({
  selector    : 'app-task-player',
  templateUrl : 'task-player.component.html',
  styleUrls   : ['task-player.component.scss']
})
export class TaskPlayerComponent {

  @Input() task : Task;
  timer: Observable<any>;

  constructor() {
    this.task          = new Task();
    this.task.title    = "Build project sketch";
    this.timer = Observable.interval().map( i => this.task.getDuration({ format: 'hh[h] mm[m] ss[s]',  settings: { trim: false }}));
  }

  play() {
    this.task.start();
  }

  pause() {
    this.task.stop();
  }

  stop() {
    this.task.stop();
  }

  taskIsPlaying() {
    return this.task.isActive;
  }
}
