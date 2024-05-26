import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FavoritesService } from '../../../services/favorites.service';
import { MainHeaderComponent } from '../../main-header/main-header.component';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NgFor, MainHeaderComponent, FooterComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  constructor(public FavoritesService: FavoritesService) { }

}
