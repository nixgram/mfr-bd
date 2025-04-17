import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { environment } from "environments/environment.dev";
import { AdminAuthService } from "@services/admin-auth.service";

@Component({
	selector: "app-layout",
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: "./layout.component.html",
	styleUrl: "./layout.component.css",
})
export class LayoutComponent {
	env = environment;

	constructor(public adminAuthService: AdminAuthService) {}

	get isLoggedIn(): boolean {
		return this.adminAuthService.isAuthenticated();
	}

	logout() {
		this.adminAuthService.logout();
	}
}
