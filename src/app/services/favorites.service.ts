import { Injectable } from '@angular/core';
import { HotelCard } from '../Models/hotelCard';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  public Favorites: HotelCard[] = [];

  constructor() { }

  get FavoritesList(): HotelCard[] {
    return this.Favorites;
  }
  addfav(fav: HotelCard): void {
    this.Favorites.push(fav);
  }
}
