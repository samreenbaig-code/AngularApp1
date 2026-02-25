import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-bio.component.html',
  styleUrl: './user-bio.component.css'
})
export class UserBioComponent {

  @Input() bio!: string;
  @Output() bioUpdated = new EventEmitter<string>();

  editMode = false;
  newBio = '';

  enableEdit() {
    this.editMode = true;
    this.newBio = this.bio;
  }

  saveBio() {
    this.bioUpdated.emit(this.newBio);
    this.editMode = false;
  }
}