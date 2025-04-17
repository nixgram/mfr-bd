import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from "@services/user.service";
import { RouterModule } from "@angular/router";
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isAuthenticated: boolean;

  constructor(private userAuthService: UserService) {
    this.isAuthenticated = this.userAuthService.isAuthenticated();
  }
}
