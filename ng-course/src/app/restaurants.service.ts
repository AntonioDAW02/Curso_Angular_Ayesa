import { Injectable } from '@angular/core';
import { RESTAURANTDB } from 'src/mocks';
import { Restaurant } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor() {}

  getRestaurants(): Restaurant[] {
    // Conexion DB
    // Petición REST
    return RESTAURANTDB;
  }

  getRestaurantsById(id: number): Restaurant {
    return id > 0 && id < 11 ? RESTAURANTDB[id - 1] : undefined;
  }
}
