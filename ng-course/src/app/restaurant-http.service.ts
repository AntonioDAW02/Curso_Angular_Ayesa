import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantHttpService {

  restaurantUrl = "http://107.191.63.129:8080/restaurants/";

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantUrl);
  }

  getRestaurantsById(id: number): Observable<Restaurant> {
    const url = this.restaurantUrl + String (id) + "/";
    return this.http.get<Restaurant>(url);
  }

  createRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.restaurantUrl, restaurant);
  }

}
