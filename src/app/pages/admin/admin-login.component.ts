import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminAuthService } from "@services/admin-auth.service";
import { Router } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { InputComponent } from "@components/input/input.component";
import { ButtonComponent } from "@components/button/button.component";
import { MatButtonModule } from "@angular/material/button";
 
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, InputComponent, MatButtonModule],
  templateUrl: './admin-login.component.html',
  styles: ``,
})
export class AdminLoginComponent {
  username = '';
  password = '';

  constructor(
    private adminAuthService: AdminAuthService,
    private router : Router
    ) {}

  async onSubmit() {
    const success = this.adminAuthService.login(this.username, this.password);
    if (!success) {
      alert('Invalid username or password');
      return;
    }
    await this.router.navigate(['/admin']);
  }
}