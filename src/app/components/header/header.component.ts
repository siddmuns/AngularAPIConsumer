//Munsif Siddiqui
//991680159
import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  assignmentTitle = 'Assignment 4';

  currentDate() {
    return new Date().toLocaleDateString();
  }
}
