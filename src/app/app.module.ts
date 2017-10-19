import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NoteService } from '../service/notes';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyAK_OgruCn55mbOrW7avN3SWQlwsZnxmOg",
    authDomain: "ticketsbus-f959f.firebaseapp.com",
    databaseURL: "https://ticketsbus-f959f.firebaseio.com",
    projectId: "ticketsbus-f959f",
    storageBucket: "ticketsbus-f959f.appspot.com",
    messagingSenderId: "1011066449943"
  });

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteService
  ]
})
export class AppModule {}
