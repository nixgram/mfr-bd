import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AuthService } from "@services/auth.service";
import { MenuService } from "@services/menu.service";
import { RxdbProviderService } from "@services/rxdb.service";
import { RootMenu } from "@typings/menu.type";
import { environment } from "environments/environment.dev";
import { MainContentComponent } from "@components/main-content/main-content.component";

@Component({
	selector: "app-layout",
	standalone: true,
	imports: [CommonModule, RouterModule, MainContentComponent],
	templateUrl: "./layout.component.html",
	styleUrl: "./layout.component.css",
})
export class LayoutComponent {
	environment = environment;

	authService = inject(AuthService);
	menuService = inject(MenuService);
	rxdbProvider = inject(RxdbProviderService);

	rootMenu: RootMenu = this.menuService.rootMenu;

	ngOnInit(): void {
		if (!this.rxdbProvider.rxDatabase) {
			this.rxdbProvider.intiRxDatabase("retubev1");
		}
	}
}
