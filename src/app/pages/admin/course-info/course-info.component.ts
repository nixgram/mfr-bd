import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [CommonModule, CdkAccordionModule, MatIconModule],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.css',
})
export class CourseInfoComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}
