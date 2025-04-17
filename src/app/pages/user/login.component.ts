import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from "@services/user.service";
import { Router } from "@angular/router";
import { InputComponent } from "@components/input/input.component";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, InputComponent, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private userService: UserService,
    private router : Router
    ) {}

  async onSubmit() {
    const success = this.userService.login(this.username, this.password);
    if (!success) {
      alert('Invalid username or password');
      return;
    }
    await this.router.navigate(['/user/home']);
  }
}
