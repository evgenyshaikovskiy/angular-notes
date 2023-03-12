import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../note';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  public noteForm!: FormGroup;

  public notes: Note[] = [];
  ngOnInit(): void {
    this.getAllNotes();
  }

  constructor(private noteService: NoteService, formBuilder: FormBuilder) {
    this.noteForm = formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  public getAllNotes() {
    this.noteService.getAllNotes().subscribe((result) => {
      this.notes = result;
    })
  }

  public deleteNote(note: Note) {
    this.noteService.deleteNote(note);
  }

  public updateNote(note: Note) {
    this.noteForm.setValue({
      description: note.noteDescription,
      title: note.noteTitle,
      id: note.id
    });
  }
}
