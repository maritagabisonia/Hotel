import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
}
