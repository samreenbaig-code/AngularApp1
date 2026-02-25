import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.css'
})
export class UserStatusComponent {

  @Input() isOnline!: boolean;
  @Output() statusToggled = new EventEmitter<void>();

  toggle() {
    this.statusToggled.emit();
  }
}