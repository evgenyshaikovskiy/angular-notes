import { Injectable } from '@angular/core';
import { Note } from './note';
import {
  Firestore,
  doc,
  collection,
  addDoc,
  collectionData,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private afs: Firestore) {}

  public addNote(note: Note) {
    note.id = doc(collection(this.afs, 'id')).id;
    return addDoc(collection(this.afs, 'Notes'), note);
  }

  public getAllNotes(): Observable<Note[]> {
    const notesRef = collection(this.afs, 'Notes');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Note[]>;
  }

  public deleteNote(note: Note) {
    const docRef = doc(this.afs, `Notes/${note.id}`);
    return deleteDoc(docRef);
  }

  public updateNote(note: any, noteId: string) {
    const docRef = doc(this.afs, `Notes/${noteId}`);
    return updateDoc(docRef, note);
  }
}
