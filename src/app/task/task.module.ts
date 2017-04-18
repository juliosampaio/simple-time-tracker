import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskPlayerComponent } from './task-player/task-player.component';
import { TagsComponent } from '../tag/tags.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    TaskPlayerComponent,
    TagsComponent
  ],
  exports: [
    TaskPlayerComponent,
    TagsComponent
  ]
})
export class TaskModule {

}
