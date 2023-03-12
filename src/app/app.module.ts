import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { ModalComponent } from './modal/modal.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, NoteComponent, ModalComponent],
  imports: [
    BrowserModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyCpci1KXvSPYIEFldrxgX-flQVOfSYrg-8',
        authDomain: 'angular-notes-e1d76.firebaseapp.com',
        projectId: 'angular-notes-e1d76',
        storageBucket: 'angular-notes-e1d76.appspot.com',
        messagingSenderId: '183542395935',
        appId: '1:183542395935:web:5662dfa5523ad68238912a',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
