import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent, ToolbarComponent } from './layout'

@NgModule({
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        RouterModule,
    ],
    declarations: [
        SidenavComponent,
        ToolbarComponent
    ],
    exports     : [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        RouterModule,
        SidenavComponent,
        ToolbarComponent
    ],
})
export class SharedModule {

}