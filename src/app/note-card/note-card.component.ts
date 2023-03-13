import { FormGroup } from '@angular/forms';
import { NoteService } from './../note.service';
import { Component, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css'],
})
export class NoteCardComponent {
  @Input() note!: Note;
  @Input() noteForm!: FormGroup;

  constructor(private readonly noteService: NoteService) {}

  public deleteNote(note: Note) {
    this.noteService.deleteNote(note);
  }

  public updateNote(note: Note) {
    this.noteForm.setValue({
      description: note.noteDescription,
      title: note.noteTitle,
      id: note.id,
    });
  }
}
