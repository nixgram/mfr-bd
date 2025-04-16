import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DialogModule } from "@angular/cdk/dialog";

@Component({
	selector: "app-dialog",
	standalone: true,
	imports: [CommonModule, DialogModule],
	templateUrl: "./dialog.component.html",
	styleUrl: "./dialog.component.scss",
})
export class DialogComponent {}
