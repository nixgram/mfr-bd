import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' }
  ];

  addNewUser() {
    this.users.push({ name: '', email: '' });
  }

  updateUsers() {
    console.log('Updating users:', this.users);
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
