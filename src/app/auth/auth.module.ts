import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { SharedModule } from '../shared';

import { LoginComponent } from './login/login.component';
import { FirebaseAuthService } from './firebase-auth.service';
import { AuthGuard } from './auth.guard';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: LoginComponent,
  },
]);


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
    AngularFireModule.initializeApp(firebaseConfig, 'simple-time-tracker'),
    authRouting,
    SharedModule,
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AngularFireAuth,
    AuthGuard,
    { provide: 'AuthService', useClass: FirebaseAuthService }
  ]
})
export class AuthModule {

}
