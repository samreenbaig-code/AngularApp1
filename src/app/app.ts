import { Component } from '@angular/core';
import { User } from './models/user.model';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserCardComponent,
    UserStatusComponent,
    UserBioComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  darkMode = false;

  user: User = {
    name: 'Samreen Baig',
    age: 40,
    profilePicture: 'https://i.pravatar.cc/150?img=12',
    bio: 'Aspiring Angular Developer building modern web applications.',
    isOnline: true,
    email: 'samreen@example.com',
    role: 'Frontend Developer'
  };

  toggleStatus() {
    this.user.isOnline = !this.user.isOnline;
  }

  updateBio(newBio: string) {
    this.user.bio = newBio;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}