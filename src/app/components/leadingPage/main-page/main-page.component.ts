import { Component } from '@angular/core';
import { HotelsListComponent } from '../hotels-list/hotels-list.component';
import { Router } from '@angular/router';
import { MainHeaderComponent } from '../../main-header/main-header.component';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HotelsListComponent, MainHeaderComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private router: Router) { }

  navigateToFavorites() {
    this.router.navigate(['/favorites'])

  }
}
