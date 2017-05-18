import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector    : 'app-toolbar',
  templateUrl : 'toolbar.component.html'
})
export class ToolbarComponent {

  @Output() hamburgerButtonClicked = new EventEmitter();

  triggerClick() {
    this.hamburgerButtonClicked.emit();
  }

}
