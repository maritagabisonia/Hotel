import { Injectable } from '@angular/core';
import { HotelCard } from '../Models/hotelCard';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  public Hotels: HotelCard[] = [
    new HotelCard(
      "assets/Picture.svg",
      "Berlin",
      "Wed 25 Jan-Fri 27 Jan",
      "A Tour Of The City And Its Surroundings Led By A Professional Guide ...",
      "8.2"
    ),
    new HotelCard(
      "assets/hotel2.svg",
      "Berlin",
      "Wed 25 Jan-Fri 27 Jan",
      "A Tour Of The City And Its Surroundings Led By A Professional Guide ...",
      "8.2"
    ),
  ];

  constructor() { }

  get HotelsList(): HotelCard[] {
    return this.Hotels;
  }

}
