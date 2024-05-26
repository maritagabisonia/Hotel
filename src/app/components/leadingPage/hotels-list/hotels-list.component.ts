import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HotelCard } from '../../../Models/hotelCard';
import { FavoritesService } from '../../../services/favorites.service';
import { HotelsService } from '../../../services/hotels.service';
@Component({
  selector: 'app-hotels-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hotels-list.component.html',
  styleUrl: './hotels-list.component.css'
})
export class HotelsListComponent {
  constructor(public FavoritesService: FavoritesService, public HotelsService: HotelsService) { }

  addToFavorites(fav: HotelCard) {
    this.FavoritesService.addfav(fav);
  }
}
