import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AuthService } from "@services/auth.service";
import { MenuService } from "@services/menu.service";
import { RxdbProviderService } from "@services/rxdb.service";
import { RootMenu } from "@typings/menu.type";
import { environment } from "environments/environment.dev";
import { MainContentComponent } from "@components/main-content/main-content.component";
import { UserService } from "@services/user.service";

@Component({
	selector: "app-layout",
	standalone: true,
	imports: [CommonModule, RouterModule,],
	templateUrl: "./layout.component.html",
	styleUrl: "./layout.component.css",
})
export class LayoutComponent {
	env = environment;

	constructor(public adminAuthService: UserService) {}

	get isLoggedIn(): boolean {
		return this.adminAuthService.isAuthenticated();
	}

	logout() {
		this.adminAuthService.logout();
	}
}
