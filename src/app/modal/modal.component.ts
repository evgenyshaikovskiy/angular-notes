import { NoteService } from './../note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../note';

export interface ModalConfig {
  id: string;
  modalLabel: string;
  modalTitleLabel: string;
  modalTextLabel: string;
  modalResumeBtnText: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() noteForm!: FormGroup;
  @Input() modalConfig!: ModalConfig;
  @Input() action!: string;

  constructor(private noteService: NoteService) {}

  public onClick() {
    if (this.action === 'create') {
      this.noteService
        .addNote({
          id: '',
          noteTitle: this.noteForm.value.title,
          noteDescription: this.noteForm.value.description,
        })
        .then((note) => {
          if (note) {
            console.log(`${note} was successfully created`);
            this.noteForm.reset();
          }
        });
    } else {
      this.noteService.updateNote(
        {
          id: this.noteForm.value.id,
          noteDescription: this.noteForm.value.description,
          noteTitle: this.noteForm.value.title,
        },
        this.noteForm.value.id
      );
    }
  }
}
