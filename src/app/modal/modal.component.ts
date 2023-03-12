import { Component, Input } from '@angular/core';

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
  @Input() modalConfig!: ModalConfig;
}
