import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { LoginComponent } from './login/login.component';
import { TagsComponent } from '../tag/tags.component';
import { FirebaseAuthService } from './firebase-auth.service';

export const firebaseConfig = {
  apiKey            : 'AIzaSyBpVuIrnaCGOt7JtGZpZ0byJNW2Rhz-2hM',
  authDomain        : 'simple-time-tracker.firebaseapp.com',
  databaseURL       : 'https://simple-time-tracker.firebaseio.com',
  storageBucket     : 'simple-time-tracker.appspot.com',
  messagingSenderId : '429323816433'
};



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig, 'simple-time-tracker'),
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [AngularFireAuth, FirebaseAuthService]
})
export class AuthModule {

}
