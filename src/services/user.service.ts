import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userUsername = 'user';
  private readonly userPassword = 'user123';
  private isLoggedIn = true;

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if (username === this.userUsername && password === this.userPassword) {
      this.isLoggedIn = true;
      this.router.navigate(['/user-dashboard']); // Redirect to user dashboard
      return true;
    }
    return false;
  }


  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // Redirect to login
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
