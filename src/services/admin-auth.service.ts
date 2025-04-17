import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private readonly adminUsername = 'admin';
  private readonly adminPassword = 'admin123';
  private isLoggedIn = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === this.adminUsername && password === this.adminPassword) {
      this.isLoggedIn = true;
      this.router.navigate(['/admin']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/admin/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
