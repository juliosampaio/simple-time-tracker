import { Component, Input } from '@angular/core';

import { Task } from '../task.model';

@Component({
  selector    : 'app-task-player',
  templateUrl : 'task-player.component.html',
  styleUrls   : ['task-player.component.css']
})
export class TaskPlayerComponent {
  @Input() task : Task;
  timer: string;

  constructor() {
    this.task = new Task();
    this.task.title = "Build project sketch";
    setInterval(() => {
      let seg = new Date().getSeconds();
      this.timer = `0h 30m ${seg}s`;
    }, 1000)
  }

  getTimer() {
    return this.timer;
  }
}
